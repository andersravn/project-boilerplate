import type { NextConfig } from "next";
import { withUniformConfig } from "@uniformdev/canvas-next-rsc/config";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
});

export default withMDX(withUniformConfig(nextConfig));