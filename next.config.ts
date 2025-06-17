import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias["./candid-core"] = path.resolve(
      __dirname,
      "node_modules/@dfinity/candid/lib/esm/candid"
    );

    return config;
  },
};

export default nextConfig;
