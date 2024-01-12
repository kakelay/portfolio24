'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5242c9b0ed1f3dac12123adad2261642",
"index.html": "cea53027064a233f65a0e98b5d0d06aa",
"/": "cea53027064a233f65a0e98b5d0d06aa",
"main.dart.js": "1feea8c68b06f44e003faab870063246",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a05579a1af39cebe311b1dbc98b2331c",
".git/config": "8374eafb6a2ebd39e473d4e455414dc7",
".git/objects/61/c6555d2ebb28d78f1b6cf04287a658388bcc42": "13bea006aa0ac9afb8de621f6eb03d98",
".git/objects/59/534414c2bac265b36a28e0384252149ce8529f": "7abb2a62549e688d1e3005e844307aed",
".git/objects/92/8d23f12d70617534a7b3a9b3a3cfc566799941": "ade4d2956dd068c84256d8d40c5b7bc4",
".git/objects/66/dcebe74dd8bc61e3a6aa7ca39a4e057adfb71a": "dc737ccaae249ce2992fb6b1b0ad6199",
".git/objects/04/2c1d05ce19541c06d04ba79d597615e0c6ccbc": "783ffd682952b455e57309f80a43aa26",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/9e21385fa643cd0b3323895f8479288191faee": "7a7ee099b6ea3da86de47d5ac85f61b1",
".git/objects/35/e0b00f3167604a3fefb42cca04e7b712861859": "aad4a9fd2224c0fec4173d9231f2e04a",
".git/objects/35/444d4c6e0294243e73775ee32430ad34d930b2": "26793d55e0b9e2fd91f8195c866ed083",
".git/objects/35/45928520bfb5cdf0741ef9543e9d0f67956ed8": "f0c38826d26c7eb091e436e57052dabf",
".git/objects/3d/84ca736e0469f3f4fb6be19296a48efe2cd96e": "347c48fea7d1c71f811f6a30770ca11f",
".git/objects/3d/3dee6cc2f6fa17b8a9855674db580a9fda5569": "5c359f184d8a60559104a947f2c46a1f",
".git/objects/67/fe0ae63912a25b023845fffc1e77b46f5d692e": "d3829c1ff9b4f4f812d95353022a5990",
".git/objects/0b/23256af9794c028748c61306e13ee55c701f80": "c5e6e505b8e564f7fe39716a938031d7",
".git/objects/93/0f2d5d0de9228b721c33e0295ee418ad151e5e": "d72d4899a3408558bafdb0223990a410",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/b8bb3e7bc211121518309a8b504044d1c27291": "f4b91730dbf79ca57b554cac88689997",
".git/objects/5a/09a610d4cef3b55e78d5d979597e9772da855d": "a3ed6c4f2914e5cea323714a79242dbe",
".git/objects/33/85b0847d84f50e84a33ddf05a3fc5b4178a030": "7a1ab9e92bdc6919a7e0472351d184ef",
".git/objects/a4/19f03eaf6fa7bd3c5a41a657ebea55d41c515e": "890ac9a2a62baf0c144758c3fdaaef12",
".git/objects/d9/f5e4641cd4930119251bd65c91a4dff7d47565": "ec74ae10388639d83b899003f8f015b2",
".git/objects/d9/b6576452902edc634c9e748b843e98c067fed7": "11756f808ae4f9a4f21eaa0528866514",
".git/objects/bb/9e554de7a45b636ffa13dc3afcde5348114370": "156c2b30078d2ccd8068fa6f5aebd212",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/486cbcdfe2179a1e1b9820c9e739748383298f": "85a36d08606d05135d5f78023cfb02cb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/0f00c68f8320be7c87883706ce245c639660d4": "ee3f6eb80f413c06e1ff54b4facc0179",
".git/objects/a2/cf200c70024676d7fb9ee9dec7564820561eab": "5028bfadba53d4b3f5d4a5b22e3c0654",
".git/objects/a5/368112eba14e2ce074f007813ad0e34f5ebbd5": "d7daad386512523d54b2af4cf8b21cf8",
".git/objects/d1/b0e6e54284f48280e8e3ddbec88771685c79ad": "1bc3ced8a2e72d71e8c72c85d9113a75",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/04960d94f5c20647f4009eadb5dd905d4a02dd": "fa8d95dd1083264b9929c32aab072ca4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/0a3885a44e437d5ea5439b6d981d1ff729ee45": "622ee2c02bff9ff47b0e6f4e7ee75895",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/291404068e05190f23c82ad64ad6b8acbe7891": "1b60f7c8dfae27347678228f166420f2",
".git/objects/e5/715804482293361fbfe370632775cf6cce0cb5": "39575c83fcee57cbcc8d9f093f193a1d",
".git/objects/e2/3941421b191ac2c524c0619b52c9294a3dbd41": "b25f3fe14a7d74d0e6aa4712414c92de",
".git/objects/f3/bb4373d5bef79cd0b2f890c6d4c872d05d26c5": "4e282aafc4873c33fa084161701d51eb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/6fa193c3c822be311962da3479e0ed9b817f71": "8639ddd94fba0a824a2e4722bfbea3e8",
".git/objects/c7/95d3ee4838527981955bca214015967c27b069": "7537a389e0492ad874f286f74d4cf82a",
".git/objects/c7/4a98f0ff421b95165f76a7e7097a6db3c6fe16": "d87f2664ef67fae1d8d7502c15600ff6",
".git/objects/c0/1a3a94d39a72a07ea8d272f4665005a371b9e8": "f77f0763f721a4f0af2e7514640cda42",
".git/objects/c0/c2923ef1c45aa722c1db768504150cb7af66cc": "15d25d801c6b170eb1da0e7f03095b5a",
".git/objects/fd/47a5274d71e0cb57cfb673f2400629fe959437": "77945ac615d3284205de9e1514497da0",
".git/objects/fd/cf8b217a9830404b9b9168d1f4e3b864935805": "759a056c87996a42359035f4b58ae675",
".git/objects/f2/5fc7e82c5e0674277d15bf28bc04092719417b": "f93fe665eb845d9d2f7d5ecd51bcd42e",
".git/objects/cf/717b607dd5a01e5587214dc24f6581bf9bc4e5": "0ef25771867f0ba69c4c77e6d997d238",
".git/objects/e4/ad8bdaed7c6dfff9bb23c2c656b9b0f3d3fd73": "dd2d80c51e7829029efa35cf38493f1b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/caecb255e77aedec314cb3840627a705a5dfde": "71e5f288fd3d127dc4cb2689ebd232e7",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/7d/b499a372133eb3439d3805cfa8f1a619dc3936": "b1bb8436282f7b98e273d6f3e8de9abc",
".git/objects/45/3cb3e4f41de8a29ddfcd200369d8c48ec56882": "09971ca557d4b17dfc491143bb2c3499",
".git/objects/87/281adf0275f467c00796832aa02d662027370b": "e1b6d1fe8c5d688e6449dd3a1ff59802",
".git/objects/80/87d6f88b49b021378e9e7cdadf7a029480c40b": "f80bd27d0c7fb2067b5ac1943d341f43",
".git/objects/80/617707470e118f2eb34b37377fecf5e0963df9": "7490312847ee4225d25d0f4fbf864abc",
".git/objects/74/544ea78d5e0e8f2313b20ee066a33c84e4bbaa": "085f452cb26c9e096acaf66817d19ae2",
".git/objects/1a/c52ba1b2ac9dad5e26f6bd4f11a7f587917663": "707f3b374b47060f4d9112febc35079c",
".git/objects/17/1ade2d7a654b13d84bedda673c8e5084120b36": "9aa18ff31bce6581bb9e25a72dfcda33",
".git/objects/7b/c5392526495d460a695d14b01b7d48fd1d1d62": "6ccbf438486cebaaf538d069a1c9fd2a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/dbae14dab59fe5a58375a73b6ca0fd1f6f956f": "401d98227a84297ca506d40a57df43a6",
".git/objects/4c/02374494a0332a1c4562cebcd9affd66effc39": "8f50b397c0140648158b4c5c7e5c7b63",
".git/objects/26/d66d56ee37c0d6af0b03c17f0bff50e2777825": "0a2cf6fdbfd5e341fcc441785fe87c20",
".git/objects/26/d3f465aa26ccf83a20a7c229e66c92e01564f3": "152ae185a7ccfbba0c7f279995c759d4",
".git/objects/4d/7a2e3c81991093f6107b1a0bddd0e6af382f51": "1de441ff265c66c1426b5e50e7228447",
".git/objects/75/0bb94b847cbe854418da4163e3619a9deba01a": "8ed3b7d36f43d718bfd6e7365b4e8862",
".git/objects/72/7a4b3e9d2e8a0a6cf22cc7e91dc51dd04bf918": "5b89163a2417cdf23b1f0cfbb81af734",
".git/objects/72/66950466bcd179aa395b4ef1bc64e622de49c0": "8d798fae27f5f9944055acdf22dd82d1",
".git/objects/2a/65a06378b0755b34e89a55707ba1990e600dcf": "7d11c087865ba6c9222756ed5886c832",
".git/objects/2f/482ed294d14c6d555726f3dd4ff848fea00241": "1238fd8d1bd53d43eda2e8db2687be0f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/a316959598b78dae06dedd5de71643781bd0f0": "4b74fd248b25f486db5595afcb7ef324",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/31/9332e9ff9ee167acec3023d0178a78ceea280d": "9e7c3a910d5f6283fa864e2175768429",
".git/objects/96/defd28a193846aa9f4b7b409886877de4a846b": "49f08c7ed5dea6ccc4ae7c9983dcee93",
".git/objects/53/2f41d1c69339728b5cd49d0009979c2e28036b": "c7535d62db9b26f5d2da0f080c06b6f6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/1fa24bc665eb2a2970b9eb64931dfdfae3e0cd": "dc979e13734abdd055f85f9c1f1d0e0b",
".git/objects/01/bb511aec3003b9662bc916b574a7fece1f064a": "d9f513eb958d981da812c079c89bbec7",
".git/objects/52/5619092217a41c4acc18b639bf1f64aaff4701": "3f190c90fd3e31101ce0841eaad1d89f",
".git/objects/97/9d52e13fde7f1127ca0e7771088b5d0c30b0cb": "a92019f7e9cc35fa39076babb16c124a",
".git/objects/90/fbeb5393816a276fddd300f176e22c41f314e3": "e1e775bc46023f1a88f45c874e860c51",
".git/objects/d3/b95ef8c9e1f5222e81e01172055f7ebeb5ec2b": "9ac479ca598220fa572dacc106c2bc5f",
".git/objects/d4/59fd08888f6c92a8472c5e364149d0c6bf86b2": "2536d9de6bc5b1315a2dcb71cee2c15b",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/bd9185553398f2b000e2f29c3d8187c1924f37": "4de29a9e51e0795651262d707c9c790b",
".git/objects/a0/87ba8cbf60894cfea5c837c73742ec76c43083": "b0df0b8c28ad8daaa31c2d64263e4eb7",
".git/objects/a0/63256aeca8bb59ceabda8f33d8a0c055bddbbc": "739ef47383361f0c25f028e291f2d87e",
".git/objects/a0/32d9f2372e865070e9923efb53327575e8124f": "1cec76671c62fd2d36c50d3057a00b5c",
".git/objects/b6/bc47f8a71310c527f3b074e302eba73cc32214": "2d6e249f1a561a62249fdf08c2edae9f",
".git/objects/d5/3058cac5cb27b5fc64f8edd1a8825a7a64be46": "9e5ca7e887cdfd3a353477bd0ad9180f",
".git/objects/aa/d04a6c64df0106bade47bb7ae287e4847e3fb6": "e4c3f9ed06e520f31d08e22c1f4982a2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/66c1d2e1227ccee10bf88a3a319e3e934e54a9": "417e73295d4e74f841c51106819c9ad1",
".git/objects/a8/ff09fc5cea462c6c02c5ebcf7323515ae147c4": "ab1cab931b73dfe8451496e8c1301898",
".git/objects/de/c074911109ec2a87da7a8f760c304977765b53": "5918a024f41f115fe2bb7c33ef1428c9",
".git/objects/b0/e1c891e73806f6f88d8985f7cd1491f6a36ea4": "223526b3c1d809f0fa06fb1480d5ae9e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/576eb70e5e97874eafb63076366797a129c4d6": "14b1dae847e249d1bbc3d9b6489ac06e",
".git/objects/ef/1c0c90cf0e4e86ea15feeb843f259dca6bb094": "d52153dc258084b8934b5bff328e8122",
".git/objects/ef/0e71a98596d1d27fbc640165b852bce4fb6c9e": "ba207fd410e1096513c38d83b61a9f40",
".git/objects/c3/5c6fc00bc19067fc1b3f76542ac15604e304fd": "a6ed3254f684bcb35b9ad061f0cc33a5",
".git/objects/c4/4c52b5b8add3e49c31443ae1256d0711ed3fec": "119e4e5c1052bea38df012b446c8c5ce",
".git/objects/c4/359c40da0369ef800c408a4ed98ca8cbb18cc9": "e379890e023a39b84646afbca77b8656",
".git/objects/c4/2f648157484c4c936ee68ffcb4b91375bd54d9": "ef74b495931c7121732dab1e93ec6d6a",
".git/objects/c4/6ab11994121f7c3c97569888b1e6bd68983941": "17e2f1290f7de4b53da6fc7f6f8d6895",
".git/objects/ea/69e18dcb0fef2794b2a0ece7d6820e340ff75a": "1d9af7d4a539abaa5fc86a05782d022b",
".git/objects/cd/5450fc35850158a7108dab0624346bfd426c43": "bc767743ee7d72f25b56e0bb451fc01c",
".git/objects/cc/61da3d9da23db277b846d8c1b11061135ffcfc": "e89cfb2ab613d348d3f8cdf64a768dc2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/7cf8991e749c27bb46950ecbaa728e266e813e": "870eada0648d33bd9aa2b03dd94f73d6",
".git/objects/f9/b2580f65c12658ce27e868d46955f3f9144555": "521a47b3b1857ca935b71586337ba1c6",
".git/objects/f0/8671e72bb48c30a4baf7f9e361e9c6b47bdeff": "1a97f40c93ba3faa9106eaba45c854da",
".git/objects/f7/c2862c37f9f0f300223f5005830ca71b19a601": "4cfa5ee2c31a2a0a9060cb4fc4aa1f5d",
".git/objects/ff/52caf5d731ecadb50329bef3410b6190406337": "1dd17a81aee736b03ef96d5d88264b36",
".git/objects/c5/8deda5e16e5ed87152aa7dfb8636e79236ac84": "5d095df5e311f482cedcf18b9b725870",
".git/objects/f6/54d74d0b4a709d21bf57bc14affc2c700a4ef0": "63e338a25575304527ae344ce8e6127d",
".git/objects/2c/7a1b5c50e63f805f049e09a206e8081bef1f53": "752d5300fbeb06f4adba9571428a95c1",
".git/objects/2c/2b9652addf0c6d18be2ac2c13140b8f5539750": "51eaa852f805b3ca0f2e42e6dddbeaad",
".git/objects/79/9736f71d379edf5943c71a970e535e7fd32417": "43da8646755ba36653c0d54289e8baec",
".git/objects/79/e5a901f910b0592aef745e9850325a48ea154e": "1d4151cf2c788d7d67f7bac082401944",
".git/objects/79/d7e5c6ab437ec552e272bcf1b364a57eeb4c52": "0c38463e6f4bf5f46965e4838516aea0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/4f5263f79a24abd0d6f712d19597846f442a9f": "dac2b0acfe8632a869f29a64448145c5",
".git/objects/41/a86f1c34d8743ed1643f0117adfd468f090897": "c427910b1492272917e6394441420183",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/eefd2229ca70130d948a82d49e708b66647bc0": "49fa4a2c27d63b3017372f4701d20cbf",
".git/objects/77/3fd90cac8cecaea0bd09645f727c2c2eb22c45": "203c32f04edf3e7944e5cd0fff585584",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/6b4422ea21d08a0304b27402b2ffa0834e25f5": "dcdf9b140e87333768de2f6a7db1cebb",
".git/objects/48/d39f023fc4fcb8a7d8bb89d188743e2ac4e3e1": "c64e58648965fdbb662d31c84c1e4854",
".git/objects/70/b8fbbdc1aa4546160c16d4bf8cb4b6b1b0f723": "4a8228bed5277099dc55dc3a074ce836",
".git/objects/1e/9b704cd20e15cdd8a21205864b45a49bcb8045": "a9873e8aca46b0c62719cf97f44335d4",
".git/objects/84/5d7372ff8ffbcdeeee088bfabb71ea381909af": "ed607d318bf6e26cddd6ec0e53c0d27e",
".git/objects/4a/3b47b1cfdfd2d042578105af42ee10d443d5e2": "dd7d8172e473c2b04a0cc78db362b37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/d3384d81a12c39fb7f85878e9b8aeb37684e23": "b9a1c538778e9fa8c6c900482ee11132",
".git/objects/71/27aa8629ca756098a3265d8f08f00d427133b7": "fba479886d12fb6f38be02bbc4518be2",
".git/objects/71/32776482adafc015b4f80cde66a0bc71ca549d": "986a53761f52f3a2a75d10f7e76335a5",
".git/objects/71/7b5815458cdf60115a3f06481266b6d6703231": "1148c5fe293ab2fef7086fae74808da0",
".git/objects/1c/f53665b02a9db5423dda7c2a50d6cc8ee9fb28": "7bab794eeffe4a55f98103b4846ad638",
".git/objects/49/007538365dee8eb922f088a3792109b120e318": "0962ba2bcbb882688c1d6ece907fa8fe",
".git/objects/2e/cd6e2b08d01b648ce3cf29c89382ec2da8adcb": "8e2c379dc9711c05cdb727c29cd4972d",
".git/objects/2e/ad7e5c129cae38c6fe0ca4c93c0af298bfb2a3": "51dfdbedd915cc49bbdf9e5b2c506db7",
".git/objects/2b/c7b7332db32eadc4d2ffde429c37e608f70290": "58052c877b40d714732943f07717d1ed",
".git/objects/2b/5ac952de517efb06106351f684bf630baffafd": "17634f24e809d69d9e5e53ff453d200b",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/78/51e2391af8abd3896f9fb2b6c035cecb49d103": "303f588babccafe0332fe84ab00ea7b3",
".git/objects/78/b51d6983ed5876b21e3bcecbd6c851c2b2c94c": "679a5e90110c91f3f516ed36c8ca181d",
".git/objects/8b/76ef6e6d4b20f49d9ebd8d3255341f93eb29d0": "bf8201a89e3f710cb81358a8c16795c9",
".git/objects/7f/144990634f44b51e1f9ffbc4589405cfbf5908": "35b6cc6a999633faf3410b050dd5da64",
".git/objects/7f/9fa41862f23eab4b51a7ba493213103e2b4a81": "f5a4419de6417bc98432b62edf2d467c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ad6734cd858b84fa7eac9de4617b1af",
".git/logs/refs/heads/main": "450a631ef09be5c8e995742ca48a423f",
".git/logs/refs/remotes/origin/main": "407e6e77e92b6e6b80939a13afe445ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "17ceaebd121e1d53181938236ccf217a",
".git/refs/remotes/origin/main": "17ceaebd121e1d53181938236ccf217a",
".git/index": "abe77767e9e74657fae65215be380c4a",
".git/COMMIT_EDITMSG": "2508614c06e86acaa200cc9bd1180dcf",
"assets/AssetManifest.json": "50857e6d0abe20bf3f9c03864631e703",
"assets/NOTICES": "073529eed1b90811171e6f10feae7463",
"assets/FontManifest.json": "b406879872f6995bdbe0f1cf4ffd68b1",
"assets/AssetManifest.bin.json": "823271f32a94decd2725555cb9c7c680",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "77a7bafe9ffd9f7ac523140bfffff322",
"assets/fonts/MaterialIcons-Regular.otf": "3435b5fd96a961bbfd5422b98d171c0f",
"assets/assets/images/no_vehicle.png": "ceae63076052c28c648dda1b8aa1a5ac",
"assets/assets/images/login.png": "aa6539f7a825c04d0e99b74a795b4f92",
"assets/assets/images/login_bg.png": "3ada64a8221422d698dcd965cab31902",
"assets/assets/images/empty_picture.png": "5975d96b60a6337d4319ca9900f2bc2f",
"assets/assets/images/user_avatar.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/assets/images/home_no_parking.png": "069458f9aeb2331a76e7d192f57a9093",
"assets/assets/images/dart_course.png": "777c78b4cd3abdee35028982c339b5d2",
"assets/assets/images/github.png": "9c7822bff334f1bf1570ae88a2e24e0f",
"assets/assets/images/landing_item_1.png": "61fb5385102c4fbd92dbae2de2c6a154",
"assets/assets/images/landing_item_3.png": "abbe93114a35bc529be8f7bc3eb3f3d9",
"assets/assets/images/header_image.png": "199f3d8fd120c1908b2ba2071f22124d",
"assets/assets/images/vehicle_appbar_icon.png": "466925e4b986095a130beac81dc0627a",
"assets/assets/images/landing_item_2.png": "2c0dd284665bf3346aafdc08916c247a",
"assets/assets/images/monkey.png": "5595166ede23d47933a3ed90fdea2af1",
"assets/assets/images/MealMonkeyLogo.png": "6c514f6a6260cd3c3dd277628721d593",
"assets/assets/images/ui.png": "2fb272eb9dc2eaebf0034206e039109f",
"assets/assets/images/kakelay.jpg": "54f41f7f3f6457d3c9dac3b00a4e66d7",
"assets/assets/images/camera.png": "66f17adbe76d1db6ce0057618fdabfbd",
"assets/assets/lotties/search.json": "53ad817aa5181d98fa103b46556ed435",
"assets/assets/lotties/loading.json": "f7b4ad4f66e75812172b295dad2583bf",
"assets/assets/lotties/success.json": "1b38d62572b68cabfeeeadd6a930c00b",
"assets/assets/lotties/arrowback.json": "b723e18a21f2c8adccc6d9fa655ad2ae",
"assets/assets/lotties/rejected-request.json": "be1943dd5560aaed07fb588e5c2cc12b",
"assets/assets/lotties/empty-notifications.json": "db970353e6787abd1952abdc516e386c",
"assets/assets/lotties/no-internet.json": "c9386298e8e1ed774997aece74ff95f4",
"assets/assets/map_styles/light.json": "efa696dd7a0df9afe0037c2b84a74fdd",
"assets/assets/map_styles/custom_map_style.json": "a34d378bca70afd5443e80f63be9ddfb",
"assets/assets/map_styles/dark.json": "5b4f100b89841019da37e2d6c56f9cea",
"assets/assets/app_icons/512x512.png": "f99d658a7e26a2e950821520c3e35b53",
"assets/assets/svgs/feedback_line.svg": "31552117052d10a44f0b0ce0e418807f",
"assets/assets/svgs/flashlight.svg": "7083ff4f80608ac2d53453b558a0480f",
"assets/assets/svgs/list.svg": "5fd9641a1790c360190e0fb9f02059fa",
"assets/assets/svgs/parking_active.svg": "93d7ad822cb28a93ac63c1e59aa7ef1a",
"assets/assets/svgs/info_rounded_outline.svg": "2d6e22d639fc5539689a4efff71a2f0e",
"assets/assets/svgs/setting_active.svg": "c3cd027b41d35486f12ad3da79862634",
"assets/assets/svgs/list_curve.svg": "8ed6e9a94be091bb3d48d531388a04ae",
"assets/assets/svgs/logout.svg": "e5d8dc7a27f6d880dc0f3912777ea71f",
"assets/assets/svgs/refresh_recent.svg": "f23738ceab74309e0506194315bba4cf",
"assets/assets/svgs/scan_qr.svg": "0bc7c263a03f3b1fdc97715bfd412ed8",
"assets/assets/svgs/warning_triangle.svg": "f1ef80e1169d18a7897583cb212d77ce",
"assets/assets/svgs/recycle_bin.svg": "6902a497dea43f737dcb500580bd7777",
"assets/assets/svgs/map.svg": "93bbb2d43c84f7b468df7c0953b47f2a",
"assets/assets/svgs/timer-fill.svg": "1388a24abd1cce1787e1ca878d63b079",
"assets/assets/svgs/location_pin.svg": "da94dcba4da2f921f0555554e84db57d",
"assets/assets/svgs/app_icon.svg": "eb502e9c7ecf63d70e184af0162d01a1",
"assets/assets/svgs/phone_android.svg": "7b9f84daf309b5893da257096f139fb9",
"assets/assets/svgs/eye_close.svg": "594dc8cc0c6d21847b4dcd66383c1ce3",
"assets/assets/svgs/location_active.svg": "5b4017269508c6dd5d00f3ce95fc629d",
"assets/assets/svgs/flashlight_active.svg": "ab9312b873817fca56970025d6d34881",
"assets/assets/svgs/plus.svg": "b5486f0a42524bfff18f7ea350d9a390",
"assets/assets/svgs/check.svg": "2f88e29519d87865b7f961e9876fe7b3",
"assets/assets/svgs/world.svg": "1453ab9f5235ace58d341ea9e3d71aa8",
"assets/assets/svgs/refresh.svg": "72e44bca04e06da1b0a4fe4306231cc0",
"assets/assets/svgs/star_line.svg": "6f23c965210fcb52ccbac6921ea40232",
"assets/assets/svgs/qr_scan_line.svg": "37c17c35c6ca1d51b32275b457c22ea7",
"assets/assets/svgs/navigation.svg": "f0bd6d6e4efba825303c219810626bc5",
"assets/assets/svgs/setting.svg": "64b1df6b36f2cacf8993d04e25a08273",
"assets/assets/svgs/vehicle.svg": "d768474efd93c3f68c909e49d9a55312",
"assets/assets/svgs/notification.svg": "ddb51819e0ee446c4f6bfc70a15d9bab",
"assets/assets/svgs/eye_open.svg": "717f416833f098a1ce0b1086bb9dd787",
"assets/assets/svgs/edit_fill.svg": "d0b3b6f2f5d25af1fbf16a3dd65533fd",
"assets/assets/svgs/ri_history_fill.svg": "0b32aaf70081857b327d0c7a6013162a",
"assets/assets/svgs/app_icon_full.svg": "31a5d6b47ad3a7cdad18dae64b946e59",
"assets/assets/svgs/phone-fill.svg": "5759729221902adb98a8f798ebbf6297",
"assets/assets/svgs/user_with_lines.svg": "2ea05852aeb19d4db749e5ba3fde1529",
"assets/assets/svgs/bug.svg": "294ee41add86b144210fec7a841883b2",
"assets/assets/svgs/splash_screen_icon.svg": "40cb30518de8a2fbb21b8478e81c51ca",
"assets/assets/svgs/clock.svg": "0dec46e78b24641f330b2a682485e005",
"assets/assets/svgs/logo_team.svg": "f0682fe66a14d1990afb1a0f45a1f309",
"assets/assets/svgs/phone.svg": "b57b6e693cbc18423757af88dc1995f1",
"assets/assets/svgs/magnifier.svg": "303b726b6dcdb198a1dbd7472a2ad9f8",
"assets/assets/svgs/vehicle_active.svg": "3b08a18b69329ebbcbc1515313b20fa0",
"assets/assets/svgs/parking.svg": "eb7a19874d04482ef7ab398196f33b0c",
"assets/assets/svgs/curve_arrow_down.svg": "90de0de5142da885b1599566bfacae17",
"assets/assets/svgs/parking-box-fill.svg": "cd2ed2d2590388568180fc475bfd086f",
"assets/assets/icons/normal_marker_icon.png": "88bd9258435173c54f4e4657c474f3d4",
"assets/assets/icons/unselect_location_close.png": "15ecfc1d872dfea56913ff841b01f8f4",
"assets/assets/icons/location_open.png": "d68bd94be93649370b165280fc105bc0",
"assets/assets/icons/selected_marker_icon.png": "a504f67e2648e387378d8920364ae8d2",
"assets/assets/icons/unselect_location_open.png": "02550ada0ca1732269a176bf59ce7734",
"assets/assets/icons/cambodia-flag.png": "318e127d4f74246b2d87913f642fa0ca",
"assets/assets/icons/english-flag.png": "ac7efe2ba0dff4939a1d7ac55c55e0f5",
"assets/assets/icons/google.png": "3eedf8cbffcb8b1896aa64d1d42b5c15",
"assets/assets/icons/facebook.png": "ea22d70038c82153bd65820c0cca2675",
"assets/assets/icons/location_close_active.png": "f05b5a643720b9d41882a9dfddfe1a96",
"assets/assets/icons/spain-flag.png": "a9c06936eac9863d13ce7a2332b7cff5",
"assets/assets/fonts/NotoSansKhmer-Medium.ttf": "68468f9ff32ff87465defd5c1c2364b7",
"assets/assets/fonts/NotoSansKhmer-ExtraLight.ttf": "5d4bbf8f4d4cb910c46a455108add7f3",
"assets/assets/fonts/NotoSansKhmer_VariableFont.ttf": "e620b3b54d31ade0870d2e6da056dfe1",
"assets/assets/fonts/NotoSansKhmer-Light.ttf": "c613c8b66a238fd1f54f86fb284018f8",
"assets/assets/fonts/NotoSansKhmer_Bold.ttf": "2c963e6e3ff91b02b1bf59898be8dfba",
"assets/assets/fonts/NotoSansKhmer_Regular.ttf": "13bd012c46f28f43505f4547e75dd979",
"assets/assets/fonts/NotoSansKhmer_SemiBold.ttf": "9038be1db91667c3c04e274f8c292a2f",
"assets/assets/fonts/NotoSansKhmer-Black.ttf": "8207a0842401b5261a85a52f707dfb27",
"assets/assets/fonts/NotoSansKhmer-Thin.ttf": "cba4a81f328699409bb9e2a482cc12e3",
"assets/assets/fonts/NotoSansKhmer_ExtraBold.ttf": "5f63c37508fd7d64f03a13f6b79b4eb9",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
