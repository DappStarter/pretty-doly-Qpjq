require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rate sad monkey coral light army gift'; 
let testAccounts = [
"0x8c46191ee9d16953120c6f8cf9d934ad0e3a6334e743127266ba184cbe9be6da",
"0x941a8eafcaac4f9c29657deb43a15e8c3f242c844c41fecfecfc609af82e433d",
"0x2c92c724269acc025cad1d82dac35f284b69e4f98a74acef138d7294fc9d7a90",
"0xb4d8898881fd05df58385f95f1da658c0c2d8b5686e1a1394319542fb1bafb8a",
"0x5a727fc58109fa5ae84fd83af22ae1949720cdb3e0bc1ad57c20c75016465b9a",
"0x63ea56729326f02da8bfa1476b7d2f616db54bb0fe8a6cba0a81e2c8a7cf9788",
"0x80e29e932c014916a87ca8ae0463c1c977245688efd8e0bb1434039fc18cba75",
"0xce141e417924e87bdfa99fa750785370348d8808efaf7eb596295dc8fb31914c",
"0x3de18177b3055ef5e3f612ca256baeb8c6d87604a7a830e3695765c6a673084c",
"0x5e6d48db3a98d882e025865d2f1e9a866c39f9f2cd3138ed2d9b25fb9b213c3d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


