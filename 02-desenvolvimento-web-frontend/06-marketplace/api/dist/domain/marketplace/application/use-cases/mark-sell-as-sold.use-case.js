'use strict';function a39_0x5896(){const _0x5488de=['status','design:paramtypes','You\x20are\x20not\x20the\x20owner\x20of\x20this\x20product.','all','CANCELLED','Status','ProductsRepository','MarkSellAsSoldUseCase','1352pojPBF','SOLD','../repositories/sellers.repository','productsRepository','object','Product','2760980bVahyy','NotAllowedError','This\x20product\x20is\x20already\x20sold.','getOwnPropertyDescriptor','__decorate','585nLNEaD','decorate','@nestjs/common','left','567079bCEqDs','You\x20cannot\x20sell\x20a\x20cancelled\x20product.','456715xJcUji','length','sellersRepository','__esModule','SellersRepository','174818gJIOoG','__metadata','Seller','24104otddBy','Injectable','ownerId','ResourceNotFoundError','productId','findById','defineProperty','./errors/resource-not-found.error','save','function','882FKhBej','../../enterprise/entities/product','265554WCsHeS','right','equals','../../../../core/errors/common/not-allowed.error','6JAHwyW'];a39_0x5896=function(){return _0x5488de;};return a39_0x5896();}const a39_0x363d5f=a39_0x44e8;(function(_0x565070,_0x34503d){const _0x555e2e=a39_0x44e8,_0x26eaa1=_0x565070();while(!![]){try{const _0x4cb560=parseInt(_0x555e2e(0x1ae))/0x1+-parseInt(_0x555e2e(0x192))/0x2+parseInt(_0x555e2e(0x190))/0x3*(-parseInt(_0x555e2e(0x19f))/0x4)+-parseInt(_0x555e2e(0x1b0))/0x5*(-parseInt(_0x555e2e(0x196))/0x6)+-parseInt(_0x555e2e(0x1b5))/0x7+-parseInt(_0x555e2e(0x1b8))/0x8*(-parseInt(_0x555e2e(0x1aa))/0x9)+-parseInt(_0x555e2e(0x1a5))/0xa;if(_0x4cb560===_0x34503d)break;else _0x26eaa1['push'](_0x26eaa1['shift']());}catch(_0x14ef8c){_0x26eaa1['push'](_0x26eaa1['shift']());}}}(a39_0x5896,0x4e616));var __decorate=this&&this[a39_0x363d5f(0x1a9)]||function(_0x1e4641,_0x497bd0,_0x516a64,_0x37f428){const _0x24379e=a39_0x363d5f;var _0x324b2d=arguments[_0x24379e(0x1b1)],_0xe6b7c6=_0x324b2d<0x3?_0x497bd0:_0x37f428===null?_0x37f428=Object[_0x24379e(0x1a8)](_0x497bd0,_0x516a64):_0x37f428,_0x5a5256;if(typeof Reflect===_0x24379e(0x1a3)&&typeof Reflect[_0x24379e(0x1ab)]===_0x24379e(0x18f))_0xe6b7c6=Reflect[_0x24379e(0x1ab)](_0x1e4641,_0x497bd0,_0x516a64,_0x37f428);else{for(var _0x34b490=_0x1e4641['length']-0x1;_0x34b490>=0x0;_0x34b490--)if(_0x5a5256=_0x1e4641[_0x34b490])_0xe6b7c6=(_0x324b2d<0x3?_0x5a5256(_0xe6b7c6):_0x324b2d>0x3?_0x5a5256(_0x497bd0,_0x516a64,_0xe6b7c6):_0x5a5256(_0x497bd0,_0x516a64))||_0xe6b7c6;}return _0x324b2d>0x3&&_0xe6b7c6&&Object[_0x24379e(0x1be)](_0x497bd0,_0x516a64,_0xe6b7c6),_0xe6b7c6;},__metadata=this&&this[a39_0x363d5f(0x1b6)]||function(_0x50d153,_0x2145a5){const _0x148c10=a39_0x363d5f;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x148c10(0x18f))return Reflect['metadata'](_0x50d153,_0x2145a5);};Object[a39_0x363d5f(0x1be)](exports,a39_0x363d5f(0x1b3),{'value':!![]}),exports[a39_0x363d5f(0x19e)]=void 0x0;const common_1=require(a39_0x363d5f(0x1ac)),not_allowed_error_1=require(a39_0x363d5f(0x195)),either_1=require('../../../../core/logic/either'),products_repository_1=require('../repositories/products.repository'),sellers_repository_1=require(a39_0x363d5f(0x1a1)),resource_not_found_error_1=require(a39_0x363d5f(0x1bf)),product_1=require(a39_0x363d5f(0x191));function a39_0x44e8(_0x2e3ba6,_0x21a065){const _0x58964f=a39_0x5896();return a39_0x44e8=function(_0x44e8dd,_0xf8b9d2){_0x44e8dd=_0x44e8dd-0x18e;let _0xb7d6cc=_0x58964f[_0x44e8dd];return _0xb7d6cc;},a39_0x44e8(_0x2e3ba6,_0x21a065);}let MarkSellAsSoldUseCase=class MarkSellAsSoldUseCase{constructor(_0x97d693,_0x5c4e59){const _0x2c02fa=a39_0x363d5f;this[_0x2c02fa(0x1b2)]=_0x97d693,this['productsRepository']=_0x5c4e59;}async['execute'](_0xb2d789){const _0x2b5150=a39_0x363d5f,[_0x2d0a34,_0x7f2c7e]=await Promise[_0x2b5150(0x19a)]([this[_0x2b5150(0x1b2)][_0x2b5150(0x1bd)](_0xb2d789['ownerId']),this[_0x2b5150(0x1a2)]['findById'](_0xb2d789['productId'])]);if(!_0x2d0a34)return(0x0,either_1[_0x2b5150(0x1ad)])(new resource_not_found_error_1[(_0x2b5150(0x1bb))](_0x2b5150(0x1b7),'ID',_0xb2d789[_0x2b5150(0x1ba)]));if(!_0x7f2c7e)return(0x0,either_1[_0x2b5150(0x1ad)])(new resource_not_found_error_1[(_0x2b5150(0x1bb))](_0x2b5150(0x1a4),'ID',_0xb2d789[_0x2b5150(0x1bc)]));if(!_0x7f2c7e['owner']['id'][_0x2b5150(0x194)](_0x2d0a34['id']))return(0x0,either_1[_0x2b5150(0x1ad)])(new not_allowed_error_1[(_0x2b5150(0x1a6))](_0x2b5150(0x199)));if(_0x7f2c7e[_0x2b5150(0x197)]===product_1['Product'][_0x2b5150(0x19c)][_0x2b5150(0x1a0)])return(0x0,either_1[_0x2b5150(0x1ad)])(new not_allowed_error_1[(_0x2b5150(0x1a6))](_0x2b5150(0x1a7)));if(_0x7f2c7e[_0x2b5150(0x197)]===product_1['Product'][_0x2b5150(0x19c)][_0x2b5150(0x19b)])return(0x0,either_1[_0x2b5150(0x1ad)])(new not_allowed_error_1[(_0x2b5150(0x1a6))](_0x2b5150(0x1af)));return _0x7f2c7e['status']=product_1['Product'][_0x2b5150(0x19c)][_0x2b5150(0x1a0)],await this[_0x2b5150(0x1a2)][_0x2b5150(0x18e)](_0x7f2c7e),(0x0,either_1[_0x2b5150(0x193)])({'product':_0x7f2c7e});}};exports[a39_0x363d5f(0x19e)]=MarkSellAsSoldUseCase,exports[a39_0x363d5f(0x19e)]=MarkSellAsSoldUseCase=__decorate([(0x0,common_1[a39_0x363d5f(0x1b9)])(),__metadata(a39_0x363d5f(0x198),[sellers_repository_1[a39_0x363d5f(0x1b4)],products_repository_1[a39_0x363d5f(0x19d)]])],MarkSellAsSoldUseCase);