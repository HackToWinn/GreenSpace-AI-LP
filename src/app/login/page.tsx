'use client';

import { DerEncodedPublicKey } from '@dfinity/agent';
import { AuthClient } from '@dfinity/auth-client';
import { DelegationIdentity, Ed25519PublicKey, ECDSAKeyIdentity, DelegationChain } from '@dfinity/identity';
import { Buffer } from 'buffer';
import { useEffect, useState } from 'react';

export default function LoginButton() {
  const [appPublicKey, setAppPublicKey] = useState<Ed25519PublicKey | null>(null);
  const [scheme, setScheme] = useState<string>('');
  const [identityProvider, setIdentityProvider] = useState<string>('https://identity.ic0.app');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const publicKeyIndex = url.indexOf('sessionKey=');
      if (publicKeyIndex === -1) {
        alert('Invalid URL: sessionKey parameter is missing.');
        return;
      }
      const schemeIndex = url.indexOf('scheme=');
      if (schemeIndex === -1) {
        alert('Invalid URL: scheme parameter is missing.');
        return;
      }

      const modeIndex = url.indexOf('mode=');
      let modeValue = 'ic';
      if (modeIndex !== -1) {
        const modeEnd = url.indexOf('&', modeIndex);
        modeValue = url.substring(
          modeIndex + 'mode='.length,
          modeEnd !== -1 ? modeEnd : undefined
        );
      }

      const provider =
        modeValue === 'local'
          ? `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943/`
          : 'https://identity.ic0.app';
      setIdentityProvider(provider);
      setScheme(url.substring(schemeIndex + 'scheme='.length));
      if (publicKeyIndex !== -1) {

        const publicKeyString = url.substring(publicKeyIndex + 'sessionKey='.length);
        const derBytes = Buffer.from(publicKeyString, 'hex');
        const pubKey = Ed25519PublicKey.fromDer(derBytes.buffer.slice(derBytes.byteOffset, derBytes.byteOffset + derBytes.byteLength) as DerEncodedPublicKey);
        setAppPublicKey(pubKey);
      } else {
        alert('Invalid Session Key');
      }
    }
  }, []);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const middleKeyIdentity = await ECDSAKeyIdentity.generate();
    const authClient = await AuthClient.create({
      identity: middleKeyIdentity
    });

    await new Promise<void>(resolve => {
      authClient.login({
        identityProvider: identityProvider,
        onSuccess: resolve
      });
    });

    const middleIdentity = authClient.getIdentity();

    if (appPublicKey && middleIdentity instanceof DelegationIdentity) {
      const middleToApp = await DelegationChain.create(
        middleKeyIdentity,
        appPublicKey,
        new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000),
        { previous: middleIdentity.getDelegation() }
      );
      const delegationString = JSON.stringify(middleToApp.toJSON());
      const finalUrl = `${scheme}?delegation=${encodeURIComponent(delegationString)}`;
      window.location.href = finalUrl;
    } else {
      alert('Delegation chain tidak valid atau appPublicKey belum tersedia.');
    }
  };

  return (
    <div className='w-full min-h-screen px-8 md:px-24 lg:px-52 xl:px-72 flex flex-col gap-6 justify-center items-center font-[family-name:var(--font-jakarta-sans)] text-center'>
      <h1 className="text-2xl font-semibold">Login with Internet Identity</h1>
      <p className="text-gray-600 max-w-md">
        You will be redirected to a browser page to authenticate using Internet Identity.
        After successful login, you will automatically return to the app.
      </p>
      <button disabled={!appPublicKey} className="px-4 py-2 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#3E9E45] disabled:cursor-not-allowed disabled:bg-[#225D2A] disabled:text-gray-300" onClick={handleLogin}>
        Authenticate via Browser
      </button>
      {!appPublicKey && (
        <div className='bg-rose-100 border border-rose-400 text-rose-700 px-4 py-3 rounded relative'>
          <strong className='font-bold'>Error: </strong>
          <span className='block sm:inline'>
            Invalid Session Key. Make sure to launch the login process from within the mobile application.
          </span>
        </div>
      )}
    </div>
  );
}