// Global type declarations for Clarinet SDK in Vitest environment

declare global {
  var simnet: {
    getAccounts(): Record<string, string>;
    callPublicFn(
      contract: string,
      method: string,
      args: any[],
      sender: string
    ): any;
    callReadOnlyFn(
      contract: string,
      method: string,
      args: any[],
      sender: string
    ): any;
    deployContract(
      name: string,
      content: string,
      parameters: any,
      sender: string
    ): any;
    mineBlock(txs: any[]): any;
    getAssetsMap(): any;
    getDataVar(contract: string, dataVar: string): any;
    getMapEntry(contract: string, mapName: string, key: any): any;
  };
}

export {};
