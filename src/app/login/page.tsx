'use client';

import { DerEncodedPublicKey } from '@dfinity/agent';
import { AuthClient } from '@dfinity/auth-client';
import { DelegationIdentity, Ed25519PublicKey, ECDSAKeyIdentity, DelegationChain } from '@dfinity/identity';
import { Buffer } from 'buffer';
import { useEffect, useState } from 'react';

export default function LoginButton() {
  const [appPublicKey, setAppPublicKey] = useState<Ed25519PublicKey | null>(null);
  const [scheme, setScheme] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const publicKeyIndex = url.indexOf('sessionKey=');
      const schemeIndex = url.indexOf('scheme=');
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
        identityProvider: 'https://identity.ic0.app/#authorize',
        onSuccess: resolve
      });
    });

    const middleIdentity = authClient.getIdentity();

    if (appPublicKey && middleIdentity instanceof DelegationIdentity) {
      const middleToApp = await DelegationChain.create(middleKeyIdentity, appPublicKey, new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000), { previous: middleIdentity.getDelegation() });
      const delegationString = JSON.stringify(middleToApp.toJSON());
      const finalUrl = `${scheme}?delegation=${encodeURIComponent(delegationString)}`;
      window.location.href = finalUrl;
    } else {
      alert('Delegation chain tidak valid atau appPublicKey belum tersedia.');
    }
  };

  return (
    <button disabled={!appPublicKey} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleLogin}>
      Login with Internet Identity
    </button>
  );
}
