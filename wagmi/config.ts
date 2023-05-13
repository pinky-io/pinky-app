import { defineConfig } from "@wagmi/cli";
import abi from "./abi.json";
import { react } from "@wagmi/cli/plugins";
import { erc } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/contract/generated.ts",
  contracts: [
    {
      name: "Pinky Protocol",
      // @ts-ignore
      abi,
    },
  ],
  plugins: [
    erc({
      721: true,
    }),
    react(),
  ],
});
