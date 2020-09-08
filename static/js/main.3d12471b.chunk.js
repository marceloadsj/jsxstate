(this["webpackJsonpjsxstate-example"]=this["webpackJsonpjsxstate-example"]||[]).push([[0],{518:function(e,n,t){"use strict";t.r(n);var i={};t.r(i),t.d(i,"Interpret",(function(){return x})),t.d(i,"Matches",(function(){return O})),t.d(i,"Send",(function(){return M})),t.d(i,"Value",(function(){return v})),t.d(i,"useContextMachine",(function(){return f})),t.d(i,"useValue",(function(){return P}));var r=t(3),s=t.n(r),a=t(42),o=t.n(a),c=t(54),p=(t(61),t(13)),j=t(19),_=t(52),S=t(27),l=t(55),u=t(14),y=t(43),d=Object(r.createContext)(void 0),h=d.Provider,x=function(e){var n=e.machine,t=e.options,i=e.id,a=e.children,o=Object(y.useMachine)(n,t),c=Object(r.useRef)(o);c.current=o;var j={ref:c},_=Object(r.useContext)(d);_&&(j=Object(p.a)(Object(p.a)({},_),j));var S=i||n.id;return S&&(j[S]=c),s.a.createElement(h,{value:j},a)},E=/[,[\]]+?/,g=/[,[\].]+?/;function m(e,n,t){return String.prototype.split.call(n,t).filter(Boolean).reduce((function(e,n){return void 0===e?e:e[n]}),e)}function C(e,n,t){if("string"!==typeof n)return e;var i=m(e,n,E);return void 0===i&&(i=m(e,n,g)),void 0===i||i===e?t:i}function f(e){var n=Object(r.useContext)(d);if(n)return e?n[e]?n[e].current:void 0:n.ref.current}function P(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.machineId,i=n.context,r=n.parse,s=n.defaultValue,a=f(t)||[],o=Object(u.a)(a,1),c=o[0];if(c)return e=i?"string"===typeof i?C(c.context,i,s):c.context:c.toStrings().pop(),r?r(e,c):e}function v(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.machineId,i=n.context,r=n.parse,s=n.defaultValue,a=P({machineId:t,context:i,parse:r,defaultValue:s});return void 0===a||"[object Object]"===(null===a||void 0===a||null===(e=a.toString)||void 0===e?void 0:e.call(a))?null:a}var b=new Set(["onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onReset","onSubmit","onError","onLoad","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onToggle"]),B=new Set(["value","checked"]);var M=Object(r.forwardRef)((function(e,n){var t=e.as,i=void 0===t?"div":t,r=e.machineId,a=Object(l.a)(e,["as","machineId"]),o=f(r),c=i;if(!o)return s.a.createElement(c,Object.assign({},a,{ref:n}));var j=Object(u.a)(o,2),_=j[0],S=j[1],y=Object.entries(a),d={};return y.filter((function(e){var n=Object(u.a)(e,1)[0];return b.has(n)})).forEach((function(e){var n=Object(u.a)(e,2),t=n[0],i=n[1];d[t]=function(e){var n=e.state,t=e.send,i=e.type;return function(e){var r=i;"function"===typeof i&&(r=i(e,n,t)),r&&("string"===typeof r&&(r={type:i}),t(Object(p.a)(Object(p.a)({},e),r)))}}({state:_,send:S,type:i})})),y.filter((function(e){var n=Object(u.a)(e,1)[0];return B.has(n)})).forEach((function(e){var n=Object(u.a)(e,2),t=n[0],i=n[1];d[t]=function(e){var n=e.state,t=e.value;if("string"===typeof t){var i=C(n.context,t);return void 0===i?t:i}if("function"===typeof t)return t(n)}({state:_,value:i})})),s.a.createElement(c,Object.assign({},a,d,{ref:n}))}));var O=function(e){var n=e.machineId,t=e.context,i=e.not,r=e.value,s=e.fallback,a=void 0===s?null:s,o=e.children;return function(e){var n,t=e.machineId,i=e.context,r=e.not,s=e.value,a=f(t)||[],o=Object(u.a)(a,1)[0];return!!o&&(n=i?"function"===typeof s?s(C(o.context,i),o):C(o.context,i)===s:"function"===typeof s?s(o.value,o):o.matches(s),r&&!n||!r&&n)}({machineId:n,context:t,not:i,value:r})?o:a},k=t(45),G=t.n(k);function L(){return s.a.createElement("div",{className:"flex flex-col h-screen p-5 space-y-5 bg-gray-900"},s.a.createElement("header",{className:"flex items-center justify-between flex-shrink-0 h-10 px-5 overflow-hidden bg-gray-800 rounded shadow-md"},s.a.createElement("div",{className:"flex items-center space-x-3"},s.a.createElement("h1",{className:"text-xl text-white"},"js",s.a.createElement("span",{className:"font-bold"},"xstate")),s.a.createElement("div",{className:"px-1 py-px text-xs text-gray-500 bg-gray-900 rounded"},"v1.0.0")),s.a.createElement("div",{className:"flex items-center space-x-5"},s.a.createElement("div",{className:"text-sm text-gray-500"},"Made with"," ",s.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," ","and"," ",s.a.createElement("span",{role:"img","aria-label":"mask on the face"},"\ud83d\ude37")," ","by"," ",s.a.createElement("a",{href:"https://github.com/marceloadsj",rel:"noopener noreferrer",target:"_blank",className:"underline"},"marceloadsj")),s.a.createElement("a",{className:"px-2 py-px text-white bg-gray-900 rounded hover:bg-gray-700",href:"https://github.com/marceloadsj/jsxstate",rel:"noopener noreferrer",target:"_blank"},"Github Repository"))),s.a.createElement("div",{className:"flex flex-1 space-x-3 overflow-hidden"},s.a.createElement(j.d,{scope:Object(p.a)(Object(p.a)({classnames:G.a},S),i),theme:_.a,noInline:!0,code:'/*\nComponents available: Interpret, Send, Value, Matches\nHooks available: useContextMachine, useValue, useMatches\nCSS classes available: tailwind css classes https://tailwindcss.com/\n*/\n\nconst machine = Machine({\n  id: "light",\n  initial: "red",\n  context: {\n    steps: 10,\n  },\n  states: {\n    red: {\n      after: { 3000: "yellow" },\n    },\n    yellow: {\n      after: { 1000: "green" },\n    },\n    green: {\n      after: { 2000: "red" },\n    },\n    stopped: {\n      on: {\n        RESUME: "red",\n      },\n    },\n  },\n  on: {\n    STOP: "stopped",\n  },\n});\n\nfunction Light({ color, active }) {\n  const className = classnames(\n    "w-20 h-20 rounded-full flex items-center justify-center",\n    color,\n  );\n\n  return <div className={className}>{active && <Value />}</div>;\n}\n\nfunction Component() {\n  return (\n    <Interpret machine={machine}>\n      <div className="flex items-center space-x-10">\n        <div className="inline-block p-5 space-y-10 bg-gray-800 rounded">\n          <Matches value="red" fallback={<Light color="bg-red-800" />}>\n            <Light color="bg-red-500" active />\n          </Matches>\n\n          <Matches value="yellow" fallback={<Light color="bg-yellow-800" />}>\n            <Light color="bg-yellow-500" active />\n          </Matches>\n\n          <Matches value="green" fallback={<Light color="bg-green-800" />}>\n            <Light color="bg-green-500" active />\n          </Matches>\n        </div>\n\n        <Matches\n          value="stopped"\n          fallback={\n            <Send\n              as="button"\n              onClick="STOP"\n              className="px-3 py-2 text-white bg-blue-500 rounded"\n            >\n              Stop\n            </Send>\n          }\n        >\n          <Send\n            as="button"\n            onClick="RESUME"\n            className="px-3 py-2 text-white bg-purple-500 rounded"\n          >\n            Resume\n          </Send>\n        </Matches>\n      </div>\n    </Interpret>\n  );\n}\n\nrender(Component);'},s.a.createElement("div",{className:"flex-1 overflow-scroll"},s.a.createElement(j.a,{className:"rounded shadow"})),s.a.createElement("div",{className:"relative flex justify-center flex-1 p-5 overflow-scroll bg-white rounded shadow"},s.a.createElement(j.b,{className:"absolute self-center p-5 text-white bg-red-500 rounded"}),s.a.createElement(j.c,{className:"flex-1 w-full"})))))}o.a.render(s.a.createElement(c.a,null,s.a.createElement(L,null)),document.getElementById("root"))},56:function(e,n,t){e.exports=t(518)},61:function(e,n,t){},81:function(e,n,t){var i={"./Binary_Property/ASCII.js":82,"./Binary_Property/ASCII_Hex_Digit.js":83,"./Binary_Property/Alphabetic.js":84,"./Binary_Property/Any.js":85,"./Binary_Property/Assigned.js":86,"./Binary_Property/Bidi_Control.js":87,"./Binary_Property/Bidi_Mirrored.js":88,"./Binary_Property/Case_Ignorable.js":89,"./Binary_Property/Cased.js":90,"./Binary_Property/Changes_When_Casefolded.js":91,"./Binary_Property/Changes_When_Casemapped.js":92,"./Binary_Property/Changes_When_Lowercased.js":93,"./Binary_Property/Changes_When_NFKC_Casefolded.js":94,"./Binary_Property/Changes_When_Titlecased.js":95,"./Binary_Property/Changes_When_Uppercased.js":96,"./Binary_Property/Dash.js":97,"./Binary_Property/Default_Ignorable_Code_Point.js":98,"./Binary_Property/Deprecated.js":99,"./Binary_Property/Diacritic.js":100,"./Binary_Property/Emoji.js":101,"./Binary_Property/Emoji_Component.js":102,"./Binary_Property/Emoji_Modifier.js":103,"./Binary_Property/Emoji_Modifier_Base.js":104,"./Binary_Property/Emoji_Presentation.js":105,"./Binary_Property/Extended_Pictographic.js":106,"./Binary_Property/Extender.js":107,"./Binary_Property/Grapheme_Base.js":108,"./Binary_Property/Grapheme_Extend.js":109,"./Binary_Property/Hex_Digit.js":110,"./Binary_Property/IDS_Binary_Operator.js":111,"./Binary_Property/IDS_Trinary_Operator.js":112,"./Binary_Property/ID_Continue.js":113,"./Binary_Property/ID_Start.js":114,"./Binary_Property/Ideographic.js":115,"./Binary_Property/Join_Control.js":116,"./Binary_Property/Logical_Order_Exception.js":117,"./Binary_Property/Lowercase.js":118,"./Binary_Property/Math.js":119,"./Binary_Property/Noncharacter_Code_Point.js":120,"./Binary_Property/Pattern_Syntax.js":121,"./Binary_Property/Pattern_White_Space.js":122,"./Binary_Property/Quotation_Mark.js":123,"./Binary_Property/Radical.js":124,"./Binary_Property/Regional_Indicator.js":125,"./Binary_Property/Sentence_Terminal.js":126,"./Binary_Property/Soft_Dotted.js":127,"./Binary_Property/Terminal_Punctuation.js":128,"./Binary_Property/Unified_Ideograph.js":129,"./Binary_Property/Uppercase.js":130,"./Binary_Property/Variation_Selector.js":131,"./Binary_Property/White_Space.js":132,"./Binary_Property/XID_Continue.js":133,"./Binary_Property/XID_Start.js":134,"./General_Category/Cased_Letter.js":135,"./General_Category/Close_Punctuation.js":136,"./General_Category/Connector_Punctuation.js":137,"./General_Category/Control.js":138,"./General_Category/Currency_Symbol.js":139,"./General_Category/Dash_Punctuation.js":140,"./General_Category/Decimal_Number.js":141,"./General_Category/Enclosing_Mark.js":142,"./General_Category/Final_Punctuation.js":143,"./General_Category/Format.js":144,"./General_Category/Initial_Punctuation.js":145,"./General_Category/Letter.js":146,"./General_Category/Letter_Number.js":147,"./General_Category/Line_Separator.js":148,"./General_Category/Lowercase_Letter.js":149,"./General_Category/Mark.js":150,"./General_Category/Math_Symbol.js":151,"./General_Category/Modifier_Letter.js":152,"./General_Category/Modifier_Symbol.js":153,"./General_Category/Nonspacing_Mark.js":154,"./General_Category/Number.js":155,"./General_Category/Open_Punctuation.js":156,"./General_Category/Other.js":157,"./General_Category/Other_Letter.js":158,"./General_Category/Other_Number.js":159,"./General_Category/Other_Punctuation.js":160,"./General_Category/Other_Symbol.js":161,"./General_Category/Paragraph_Separator.js":162,"./General_Category/Private_Use.js":163,"./General_Category/Punctuation.js":164,"./General_Category/Separator.js":165,"./General_Category/Space_Separator.js":166,"./General_Category/Spacing_Mark.js":167,"./General_Category/Surrogate.js":168,"./General_Category/Symbol.js":169,"./General_Category/Titlecase_Letter.js":170,"./General_Category/Unassigned.js":171,"./General_Category/Uppercase_Letter.js":172,"./Script/Adlam.js":173,"./Script/Ahom.js":174,"./Script/Anatolian_Hieroglyphs.js":175,"./Script/Arabic.js":176,"./Script/Armenian.js":177,"./Script/Avestan.js":178,"./Script/Balinese.js":179,"./Script/Bamum.js":180,"./Script/Bassa_Vah.js":181,"./Script/Batak.js":182,"./Script/Bengali.js":183,"./Script/Bhaiksuki.js":184,"./Script/Bopomofo.js":185,"./Script/Brahmi.js":186,"./Script/Braille.js":187,"./Script/Buginese.js":188,"./Script/Buhid.js":189,"./Script/Canadian_Aboriginal.js":190,"./Script/Carian.js":191,"./Script/Caucasian_Albanian.js":192,"./Script/Chakma.js":193,"./Script/Cham.js":194,"./Script/Cherokee.js":195,"./Script/Chorasmian.js":196,"./Script/Common.js":197,"./Script/Coptic.js":198,"./Script/Cuneiform.js":199,"./Script/Cypriot.js":200,"./Script/Cyrillic.js":201,"./Script/Deseret.js":202,"./Script/Devanagari.js":203,"./Script/Dives_Akuru.js":204,"./Script/Dogra.js":205,"./Script/Duployan.js":206,"./Script/Egyptian_Hieroglyphs.js":207,"./Script/Elbasan.js":208,"./Script/Elymaic.js":209,"./Script/Ethiopic.js":210,"./Script/Georgian.js":211,"./Script/Glagolitic.js":212,"./Script/Gothic.js":213,"./Script/Grantha.js":214,"./Script/Greek.js":215,"./Script/Gujarati.js":216,"./Script/Gunjala_Gondi.js":217,"./Script/Gurmukhi.js":218,"./Script/Han.js":219,"./Script/Hangul.js":220,"./Script/Hanifi_Rohingya.js":221,"./Script/Hanunoo.js":222,"./Script/Hatran.js":223,"./Script/Hebrew.js":224,"./Script/Hiragana.js":225,"./Script/Imperial_Aramaic.js":226,"./Script/Inherited.js":227,"./Script/Inscriptional_Pahlavi.js":228,"./Script/Inscriptional_Parthian.js":229,"./Script/Javanese.js":230,"./Script/Kaithi.js":231,"./Script/Kannada.js":232,"./Script/Katakana.js":233,"./Script/Kayah_Li.js":234,"./Script/Kharoshthi.js":235,"./Script/Khitan_Small_Script.js":236,"./Script/Khmer.js":237,"./Script/Khojki.js":238,"./Script/Khudawadi.js":239,"./Script/Lao.js":240,"./Script/Latin.js":241,"./Script/Lepcha.js":242,"./Script/Limbu.js":243,"./Script/Linear_A.js":244,"./Script/Linear_B.js":245,"./Script/Lisu.js":246,"./Script/Lycian.js":247,"./Script/Lydian.js":248,"./Script/Mahajani.js":249,"./Script/Makasar.js":250,"./Script/Malayalam.js":251,"./Script/Mandaic.js":252,"./Script/Manichaean.js":253,"./Script/Marchen.js":254,"./Script/Masaram_Gondi.js":255,"./Script/Medefaidrin.js":256,"./Script/Meetei_Mayek.js":257,"./Script/Mende_Kikakui.js":258,"./Script/Meroitic_Cursive.js":259,"./Script/Meroitic_Hieroglyphs.js":260,"./Script/Miao.js":261,"./Script/Modi.js":262,"./Script/Mongolian.js":263,"./Script/Mro.js":264,"./Script/Multani.js":265,"./Script/Myanmar.js":266,"./Script/Nabataean.js":267,"./Script/Nandinagari.js":268,"./Script/New_Tai_Lue.js":269,"./Script/Newa.js":270,"./Script/Nko.js":271,"./Script/Nushu.js":272,"./Script/Nyiakeng_Puachue_Hmong.js":273,"./Script/Ogham.js":274,"./Script/Ol_Chiki.js":275,"./Script/Old_Hungarian.js":276,"./Script/Old_Italic.js":277,"./Script/Old_North_Arabian.js":278,"./Script/Old_Permic.js":279,"./Script/Old_Persian.js":280,"./Script/Old_Sogdian.js":281,"./Script/Old_South_Arabian.js":282,"./Script/Old_Turkic.js":283,"./Script/Oriya.js":284,"./Script/Osage.js":285,"./Script/Osmanya.js":286,"./Script/Pahawh_Hmong.js":287,"./Script/Palmyrene.js":288,"./Script/Pau_Cin_Hau.js":289,"./Script/Phags_Pa.js":290,"./Script/Phoenician.js":291,"./Script/Psalter_Pahlavi.js":292,"./Script/Rejang.js":293,"./Script/Runic.js":294,"./Script/Samaritan.js":295,"./Script/Saurashtra.js":296,"./Script/Sharada.js":297,"./Script/Shavian.js":298,"./Script/Siddham.js":299,"./Script/SignWriting.js":300,"./Script/Sinhala.js":301,"./Script/Sogdian.js":302,"./Script/Sora_Sompeng.js":303,"./Script/Soyombo.js":304,"./Script/Sundanese.js":305,"./Script/Syloti_Nagri.js":306,"./Script/Syriac.js":307,"./Script/Tagalog.js":308,"./Script/Tagbanwa.js":309,"./Script/Tai_Le.js":310,"./Script/Tai_Tham.js":311,"./Script/Tai_Viet.js":312,"./Script/Takri.js":313,"./Script/Tamil.js":314,"./Script/Tangut.js":315,"./Script/Telugu.js":316,"./Script/Thaana.js":317,"./Script/Thai.js":318,"./Script/Tibetan.js":319,"./Script/Tifinagh.js":320,"./Script/Tirhuta.js":321,"./Script/Ugaritic.js":322,"./Script/Vai.js":323,"./Script/Wancho.js":324,"./Script/Warang_Citi.js":325,"./Script/Yezidi.js":326,"./Script/Yi.js":327,"./Script/Zanabazar_Square.js":328,"./Script_Extensions/Adlam.js":329,"./Script_Extensions/Ahom.js":330,"./Script_Extensions/Anatolian_Hieroglyphs.js":331,"./Script_Extensions/Arabic.js":332,"./Script_Extensions/Armenian.js":333,"./Script_Extensions/Avestan.js":334,"./Script_Extensions/Balinese.js":335,"./Script_Extensions/Bamum.js":336,"./Script_Extensions/Bassa_Vah.js":337,"./Script_Extensions/Batak.js":338,"./Script_Extensions/Bengali.js":339,"./Script_Extensions/Bhaiksuki.js":340,"./Script_Extensions/Bopomofo.js":341,"./Script_Extensions/Brahmi.js":342,"./Script_Extensions/Braille.js":343,"./Script_Extensions/Buginese.js":344,"./Script_Extensions/Buhid.js":345,"./Script_Extensions/Canadian_Aboriginal.js":346,"./Script_Extensions/Carian.js":347,"./Script_Extensions/Caucasian_Albanian.js":348,"./Script_Extensions/Chakma.js":349,"./Script_Extensions/Cham.js":350,"./Script_Extensions/Cherokee.js":351,"./Script_Extensions/Chorasmian.js":352,"./Script_Extensions/Common.js":353,"./Script_Extensions/Coptic.js":354,"./Script_Extensions/Cuneiform.js":355,"./Script_Extensions/Cypriot.js":356,"./Script_Extensions/Cyrillic.js":357,"./Script_Extensions/Deseret.js":358,"./Script_Extensions/Devanagari.js":359,"./Script_Extensions/Dives_Akuru.js":360,"./Script_Extensions/Dogra.js":361,"./Script_Extensions/Duployan.js":362,"./Script_Extensions/Egyptian_Hieroglyphs.js":363,"./Script_Extensions/Elbasan.js":364,"./Script_Extensions/Elymaic.js":365,"./Script_Extensions/Ethiopic.js":366,"./Script_Extensions/Georgian.js":367,"./Script_Extensions/Glagolitic.js":368,"./Script_Extensions/Gothic.js":369,"./Script_Extensions/Grantha.js":370,"./Script_Extensions/Greek.js":371,"./Script_Extensions/Gujarati.js":372,"./Script_Extensions/Gunjala_Gondi.js":373,"./Script_Extensions/Gurmukhi.js":374,"./Script_Extensions/Han.js":375,"./Script_Extensions/Hangul.js":376,"./Script_Extensions/Hanifi_Rohingya.js":377,"./Script_Extensions/Hanunoo.js":378,"./Script_Extensions/Hatran.js":379,"./Script_Extensions/Hebrew.js":380,"./Script_Extensions/Hiragana.js":381,"./Script_Extensions/Imperial_Aramaic.js":382,"./Script_Extensions/Inherited.js":383,"./Script_Extensions/Inscriptional_Pahlavi.js":384,"./Script_Extensions/Inscriptional_Parthian.js":385,"./Script_Extensions/Javanese.js":386,"./Script_Extensions/Kaithi.js":387,"./Script_Extensions/Kannada.js":388,"./Script_Extensions/Katakana.js":389,"./Script_Extensions/Kayah_Li.js":390,"./Script_Extensions/Kharoshthi.js":391,"./Script_Extensions/Khitan_Small_Script.js":392,"./Script_Extensions/Khmer.js":393,"./Script_Extensions/Khojki.js":394,"./Script_Extensions/Khudawadi.js":395,"./Script_Extensions/Lao.js":396,"./Script_Extensions/Latin.js":397,"./Script_Extensions/Lepcha.js":398,"./Script_Extensions/Limbu.js":399,"./Script_Extensions/Linear_A.js":400,"./Script_Extensions/Linear_B.js":401,"./Script_Extensions/Lisu.js":402,"./Script_Extensions/Lycian.js":403,"./Script_Extensions/Lydian.js":404,"./Script_Extensions/Mahajani.js":405,"./Script_Extensions/Makasar.js":406,"./Script_Extensions/Malayalam.js":407,"./Script_Extensions/Mandaic.js":408,"./Script_Extensions/Manichaean.js":409,"./Script_Extensions/Marchen.js":410,"./Script_Extensions/Masaram_Gondi.js":411,"./Script_Extensions/Medefaidrin.js":412,"./Script_Extensions/Meetei_Mayek.js":413,"./Script_Extensions/Mende_Kikakui.js":414,"./Script_Extensions/Meroitic_Cursive.js":415,"./Script_Extensions/Meroitic_Hieroglyphs.js":416,"./Script_Extensions/Miao.js":417,"./Script_Extensions/Modi.js":418,"./Script_Extensions/Mongolian.js":419,"./Script_Extensions/Mro.js":420,"./Script_Extensions/Multani.js":421,"./Script_Extensions/Myanmar.js":422,"./Script_Extensions/Nabataean.js":423,"./Script_Extensions/Nandinagari.js":424,"./Script_Extensions/New_Tai_Lue.js":425,"./Script_Extensions/Newa.js":426,"./Script_Extensions/Nko.js":427,"./Script_Extensions/Nushu.js":428,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":429,"./Script_Extensions/Ogham.js":430,"./Script_Extensions/Ol_Chiki.js":431,"./Script_Extensions/Old_Hungarian.js":432,"./Script_Extensions/Old_Italic.js":433,"./Script_Extensions/Old_North_Arabian.js":434,"./Script_Extensions/Old_Permic.js":435,"./Script_Extensions/Old_Persian.js":436,"./Script_Extensions/Old_Sogdian.js":437,"./Script_Extensions/Old_South_Arabian.js":438,"./Script_Extensions/Old_Turkic.js":439,"./Script_Extensions/Oriya.js":440,"./Script_Extensions/Osage.js":441,"./Script_Extensions/Osmanya.js":442,"./Script_Extensions/Pahawh_Hmong.js":443,"./Script_Extensions/Palmyrene.js":444,"./Script_Extensions/Pau_Cin_Hau.js":445,"./Script_Extensions/Phags_Pa.js":446,"./Script_Extensions/Phoenician.js":447,"./Script_Extensions/Psalter_Pahlavi.js":448,"./Script_Extensions/Rejang.js":449,"./Script_Extensions/Runic.js":450,"./Script_Extensions/Samaritan.js":451,"./Script_Extensions/Saurashtra.js":452,"./Script_Extensions/Sharada.js":453,"./Script_Extensions/Shavian.js":454,"./Script_Extensions/Siddham.js":455,"./Script_Extensions/SignWriting.js":456,"./Script_Extensions/Sinhala.js":457,"./Script_Extensions/Sogdian.js":458,"./Script_Extensions/Sora_Sompeng.js":459,"./Script_Extensions/Soyombo.js":460,"./Script_Extensions/Sundanese.js":461,"./Script_Extensions/Syloti_Nagri.js":462,"./Script_Extensions/Syriac.js":463,"./Script_Extensions/Tagalog.js":464,"./Script_Extensions/Tagbanwa.js":465,"./Script_Extensions/Tai_Le.js":466,"./Script_Extensions/Tai_Tham.js":467,"./Script_Extensions/Tai_Viet.js":468,"./Script_Extensions/Takri.js":469,"./Script_Extensions/Tamil.js":470,"./Script_Extensions/Tangut.js":471,"./Script_Extensions/Telugu.js":472,"./Script_Extensions/Thaana.js":473,"./Script_Extensions/Thai.js":474,"./Script_Extensions/Tibetan.js":475,"./Script_Extensions/Tifinagh.js":476,"./Script_Extensions/Tirhuta.js":477,"./Script_Extensions/Ugaritic.js":478,"./Script_Extensions/Vai.js":479,"./Script_Extensions/Wancho.js":480,"./Script_Extensions/Warang_Citi.js":481,"./Script_Extensions/Yezidi.js":482,"./Script_Extensions/Yi.js":483,"./Script_Extensions/Zanabazar_Square.js":484,"./index.js":485,"./unicode-version.js":486};function r(e){var n=s(e);return t(n)}function s(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=81}},[[56,1,2]]]);
//# sourceMappingURL=main.3d12471b.chunk.js.map