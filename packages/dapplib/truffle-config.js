require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food group rival remind puppy gentle light army gate'; 
let testAccounts = [
"0xf9a6c8262ff7fcb9867b9a4988773094985d5d587fc8b34c86486d152ae56a89",
"0x82170067d42dcc4f3bdde153289526ab674e47a145bf80580d4991ae9f57d3eb",
"0x8279c12ce2319908f8b92c93fdf263e65e547531a3e97cffbe84b71962b298b4",
"0xd94186f7639328dcfc772e9063faf191326ace15033017e05c7931f0dc228ef8",
"0x2dd76a1855898777f571d9dbd781b4d8a49abbbe961ac86482637853caefa8a7",
"0x5a57533099f0d968124dc28e029659a67ce379a46363c70e7b2a8581a61c75bf",
"0x898b8d6e662fb144bf87c6b60eb805cdd013dca0374d8b06a685f043ec70713e",
"0xe4931d12e2593f6b3a98d42d684839974d98668287708b1650edc0b9eb5594d0",
"0xd81174fd25030aa0cd789132bf478bd5ab8c076f713688a9abd4a4f271ba926f",
"0x646f676e4954809e21476b9742fae3ec87e23299e1381b5983570c470f98a100"
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


