(this["webpackJsonpjsxstate-example"]=this["webpackJsonpjsxstate-example"]||[]).push([[0],{516:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"Interpret",(function(){return h})),t.d(r,"Matches",(function(){return C})),t.d(r,"Send",(function(){return b})),t.d(r,"Value",(function(){return M})),t.d(r,"useContextMachine",(function(){return m})),t.d(r,"useMatches",(function(){return f})),t.d(r,"useValue",(function(){return B}));var i=t(3),s=t.n(i),a=t(41),o=t.n(a),c=t(53),p=(t(59),t(29)),j=t(17),_=t(51),S=t(25),l=t(42);function u(){return(u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var y=Object(i.createContext)(void 0),h=function(n){var e=n.machine,t=n.options,r=n.id,a=n.children,o=Object(l.useMachine)(e,t),c=Object(i.useRef)(o);c.current=o;var p={ref:c},j=Object(i.useContext)(y);j&&(p=u({},j,p));var _=r||e.id;_&&(p[_]=c);var S=a;return"function"===typeof a&&(S=a(o[0])),s.a.createElement(y.Provider,{value:p},S)},d=/[,[\]]+?/,x=/[,[\].]+?/,E=function(n,e,t){return String.prototype.split.call(e,t).filter(Boolean).reduce((function(n,e){return void 0===n?n:n[e]}),n)},g=function(n,e,t){var r=E(n,e,d);return void 0===r&&(r=E(n,e,x)),void 0===r||r===n?t:r},m=function(n){var e=Object(i.useContext)(y);if(e){if(!n)return e.ref.current;if(e[n])return e[n].current}},f=function(n){var e,t=n.machineId,r=n.context,i=n.not,s=n.value,a=(m(t)||[])[0];return!!a&&(e=r?"function"===typeof s?s(g(a.context,r),a):g(a.context,r)===s:"function"===typeof s?s(a.value,a):a.matches(s),i&&!e||!i&&e)},C=function(n){var e=n.machineId,t=n.context,r=n.not,i=n.value,s=n.fallback,a=void 0===s?null:s,o=n.children;return f({machineId:e,context:t,not:r,value:i})?o:a},P=new Set(["onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onReset","onSubmit","onError","onLoad","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onToggle"]),v=new Set(["value","checked"]),b=Object(i.forwardRef)((function(n,e){var t=n.as,r=void 0===t?"button":t,i=n.machineId,a=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["as","machineId"]),o=m(i);if(!o)return s.a.createElement(r,Object.assign({},a,{ref:e}));var c=o[0],p=o[1],j=Object.entries(a),_={};return j.filter((function(n){var e=n[0];return P.has(e)})).forEach((function(n){var e=n[0],t=n[1];_[e]=function(n){var e=n.state,t=n.send,r=n.type;return function(n){var i=r;"function"===typeof r&&(i=r(n,e,t)),i&&("string"===typeof i&&(i={type:i}),t(u({},n,i)))}}({state:c,send:p,type:t})})),j.filter((function(n){var e=n[0];return v.has(e)})).forEach((function(n){var e=n[0],t=n[1];_[e]=function(n){var e=n.state,t=n.value;if("string"===typeof t){var r=g(e.context,t);return void 0===r?t:r}if("function"===typeof t)return t(e)}({state:c,value:t})})),s.a.createElement(r,Object.assign({},a,_,{ref:e}))}));function B(n){var e,t=void 0===n?{}:n,r=t.machineId,i=t.context,s=t.parse,a=t.fallback,o=(m(r)||[])[0];if(o)return e=i?"string"===typeof i?g(o.context,i,a):o.context:o.toStrings().pop(),s?s(e,o):e}var M=function(n){var e,t=n.machineId,r=n.context,i=n.parse,s=n.fallback,a=void 0===s?null:s,o=B({machineId:t,context:r,parse:i,fallback:a});return void 0===o?a:"[object Object]"===(null===o||void 0===o||null===(e=o.toString)||void 0===e?void 0:e.call(o))?null:o},k=t(44),O=t.n(k);function G(){return s.a.createElement("div",{className:"flex flex-col h-screen p-5 space-y-5 bg-gray-900"},s.a.createElement("header",{className:"flex items-center justify-between flex-shrink-0 h-10 px-5 overflow-hidden bg-gray-800 rounded shadow-md"},s.a.createElement("div",{className:"flex items-center space-x-3"},s.a.createElement("h1",{className:"text-xl text-white"},"js",s.a.createElement("span",{className:"font-bold"},"xstate")),s.a.createElement("a",{href:"https://www.npmjs.com/package/jsxstate",rel:"noopener noreferrer",target:"_blank"},s.a.createElement("img",{src:"https://img.shields.io/npm/v/jsxstate.svg",alt:"npm"}))),s.a.createElement("div",{className:"flex items-center space-x-5"},s.a.createElement("div",{className:"text-sm text-gray-500"},"Made with"," ",s.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," ","and"," ",s.a.createElement("span",{role:"img","aria-label":"mask on the face"},"\ud83d\ude37")," ","by"," ",s.a.createElement("a",{href:"https://github.com/marceloadsj",rel:"noopener noreferrer",target:"_blank",className:"underline"},"marceloadsj")),s.a.createElement("a",{className:"px-2 py-px text-white bg-gray-900 rounded hover:bg-gray-700",href:"https://github.com/marceloadsj/jsxstate",rel:"noopener noreferrer",target:"_blank"},"Github Repository"))),s.a.createElement("div",{className:"flex flex-1 space-x-3 overflow-hidden"},s.a.createElement(j.d,{scope:Object(p.a)(Object(p.a)({classnames:O.a},S),r),theme:_.a,noInline:!0,code:'/*\nComponents available: Interpret, Send, Value, Matches\nHooks available: useContextMachine, useValue, useMatches\nCSS classes available: tailwind css classes https://tailwindcss.com/\n*/\n\nconst machine = Machine({\n  id: "light",\n  initial: "red",\n  context: {\n    steps: 10,\n  },\n  states: {\n    red: {\n      after: { 3000: "yellow" },\n    },\n    yellow: {\n      after: { 1000: "green" },\n    },\n    green: {\n      after: { 2000: "red" },\n    },\n    stopped: {\n      on: {\n        RESUME: "red",\n      },\n    },\n  },\n  on: {\n    STOP: "stopped",\n  },\n});\n\nfunction Light({ color, active }) {\n  const className = classnames(\n    "w-20 h-20 rounded-full flex items-center justify-center",\n    color,\n  );\n\n  return <div className={className}>{active && <Value />}</div>;\n}\n\nfunction Component() {\n  return (\n    <Interpret machine={machine}>\n      <div className="flex items-center space-x-10">\n        <div className="inline-block p-5 space-y-10 bg-gray-800 rounded">\n          <Matches value="red" fallback={<Light color="bg-red-800" />}>\n            <Light color="bg-red-500" active />\n          </Matches>\n\n          <Matches value="yellow" fallback={<Light color="bg-yellow-800" />}>\n            <Light color="bg-yellow-500" active />\n          </Matches>\n\n          <Matches value="green" fallback={<Light color="bg-green-800" />}>\n            <Light color="bg-green-500" active />\n          </Matches>\n        </div>\n\n        <Matches\n          value="stopped"\n          fallback={\n            <Send\n              as="button"\n              onClick="STOP"\n              className="px-3 py-2 text-white bg-blue-500 rounded"\n            >\n              Stop\n            </Send>\n          }\n        >\n          <Send\n            as="button"\n            onClick="RESUME"\n            className="px-3 py-2 text-white bg-purple-500 rounded"\n          >\n            Resume\n          </Send>\n        </Matches>\n      </div>\n    </Interpret>\n  );\n}\n\nrender(Component);'},s.a.createElement("div",{className:"flex-1 overflow-scroll"},s.a.createElement(j.a,{className:"rounded shadow"})),s.a.createElement("div",{className:"relative flex justify-center flex-1 p-5 overflow-scroll bg-white rounded shadow"},s.a.createElement(j.b,{className:"absolute self-center p-5 text-white bg-red-500 rounded"}),s.a.createElement(j.c,{className:"flex-1 w-full"})))))}o.a.render(s.a.createElement(c.a,null,s.a.createElement(G,null)),document.getElementById("root"))},54:function(n,e,t){n.exports=t(516)},59:function(n,e,t){},79:function(n,e,t){var r={"./Binary_Property/ASCII.js":80,"./Binary_Property/ASCII_Hex_Digit.js":81,"./Binary_Property/Alphabetic.js":82,"./Binary_Property/Any.js":83,"./Binary_Property/Assigned.js":84,"./Binary_Property/Bidi_Control.js":85,"./Binary_Property/Bidi_Mirrored.js":86,"./Binary_Property/Case_Ignorable.js":87,"./Binary_Property/Cased.js":88,"./Binary_Property/Changes_When_Casefolded.js":89,"./Binary_Property/Changes_When_Casemapped.js":90,"./Binary_Property/Changes_When_Lowercased.js":91,"./Binary_Property/Changes_When_NFKC_Casefolded.js":92,"./Binary_Property/Changes_When_Titlecased.js":93,"./Binary_Property/Changes_When_Uppercased.js":94,"./Binary_Property/Dash.js":95,"./Binary_Property/Default_Ignorable_Code_Point.js":96,"./Binary_Property/Deprecated.js":97,"./Binary_Property/Diacritic.js":98,"./Binary_Property/Emoji.js":99,"./Binary_Property/Emoji_Component.js":100,"./Binary_Property/Emoji_Modifier.js":101,"./Binary_Property/Emoji_Modifier_Base.js":102,"./Binary_Property/Emoji_Presentation.js":103,"./Binary_Property/Extended_Pictographic.js":104,"./Binary_Property/Extender.js":105,"./Binary_Property/Grapheme_Base.js":106,"./Binary_Property/Grapheme_Extend.js":107,"./Binary_Property/Hex_Digit.js":108,"./Binary_Property/IDS_Binary_Operator.js":109,"./Binary_Property/IDS_Trinary_Operator.js":110,"./Binary_Property/ID_Continue.js":111,"./Binary_Property/ID_Start.js":112,"./Binary_Property/Ideographic.js":113,"./Binary_Property/Join_Control.js":114,"./Binary_Property/Logical_Order_Exception.js":115,"./Binary_Property/Lowercase.js":116,"./Binary_Property/Math.js":117,"./Binary_Property/Noncharacter_Code_Point.js":118,"./Binary_Property/Pattern_Syntax.js":119,"./Binary_Property/Pattern_White_Space.js":120,"./Binary_Property/Quotation_Mark.js":121,"./Binary_Property/Radical.js":122,"./Binary_Property/Regional_Indicator.js":123,"./Binary_Property/Sentence_Terminal.js":124,"./Binary_Property/Soft_Dotted.js":125,"./Binary_Property/Terminal_Punctuation.js":126,"./Binary_Property/Unified_Ideograph.js":127,"./Binary_Property/Uppercase.js":128,"./Binary_Property/Variation_Selector.js":129,"./Binary_Property/White_Space.js":130,"./Binary_Property/XID_Continue.js":131,"./Binary_Property/XID_Start.js":132,"./General_Category/Cased_Letter.js":133,"./General_Category/Close_Punctuation.js":134,"./General_Category/Connector_Punctuation.js":135,"./General_Category/Control.js":136,"./General_Category/Currency_Symbol.js":137,"./General_Category/Dash_Punctuation.js":138,"./General_Category/Decimal_Number.js":139,"./General_Category/Enclosing_Mark.js":140,"./General_Category/Final_Punctuation.js":141,"./General_Category/Format.js":142,"./General_Category/Initial_Punctuation.js":143,"./General_Category/Letter.js":144,"./General_Category/Letter_Number.js":145,"./General_Category/Line_Separator.js":146,"./General_Category/Lowercase_Letter.js":147,"./General_Category/Mark.js":148,"./General_Category/Math_Symbol.js":149,"./General_Category/Modifier_Letter.js":150,"./General_Category/Modifier_Symbol.js":151,"./General_Category/Nonspacing_Mark.js":152,"./General_Category/Number.js":153,"./General_Category/Open_Punctuation.js":154,"./General_Category/Other.js":155,"./General_Category/Other_Letter.js":156,"./General_Category/Other_Number.js":157,"./General_Category/Other_Punctuation.js":158,"./General_Category/Other_Symbol.js":159,"./General_Category/Paragraph_Separator.js":160,"./General_Category/Private_Use.js":161,"./General_Category/Punctuation.js":162,"./General_Category/Separator.js":163,"./General_Category/Space_Separator.js":164,"./General_Category/Spacing_Mark.js":165,"./General_Category/Surrogate.js":166,"./General_Category/Symbol.js":167,"./General_Category/Titlecase_Letter.js":168,"./General_Category/Unassigned.js":169,"./General_Category/Uppercase_Letter.js":170,"./Script/Adlam.js":171,"./Script/Ahom.js":172,"./Script/Anatolian_Hieroglyphs.js":173,"./Script/Arabic.js":174,"./Script/Armenian.js":175,"./Script/Avestan.js":176,"./Script/Balinese.js":177,"./Script/Bamum.js":178,"./Script/Bassa_Vah.js":179,"./Script/Batak.js":180,"./Script/Bengali.js":181,"./Script/Bhaiksuki.js":182,"./Script/Bopomofo.js":183,"./Script/Brahmi.js":184,"./Script/Braille.js":185,"./Script/Buginese.js":186,"./Script/Buhid.js":187,"./Script/Canadian_Aboriginal.js":188,"./Script/Carian.js":189,"./Script/Caucasian_Albanian.js":190,"./Script/Chakma.js":191,"./Script/Cham.js":192,"./Script/Cherokee.js":193,"./Script/Chorasmian.js":194,"./Script/Common.js":195,"./Script/Coptic.js":196,"./Script/Cuneiform.js":197,"./Script/Cypriot.js":198,"./Script/Cyrillic.js":199,"./Script/Deseret.js":200,"./Script/Devanagari.js":201,"./Script/Dives_Akuru.js":202,"./Script/Dogra.js":203,"./Script/Duployan.js":204,"./Script/Egyptian_Hieroglyphs.js":205,"./Script/Elbasan.js":206,"./Script/Elymaic.js":207,"./Script/Ethiopic.js":208,"./Script/Georgian.js":209,"./Script/Glagolitic.js":210,"./Script/Gothic.js":211,"./Script/Grantha.js":212,"./Script/Greek.js":213,"./Script/Gujarati.js":214,"./Script/Gunjala_Gondi.js":215,"./Script/Gurmukhi.js":216,"./Script/Han.js":217,"./Script/Hangul.js":218,"./Script/Hanifi_Rohingya.js":219,"./Script/Hanunoo.js":220,"./Script/Hatran.js":221,"./Script/Hebrew.js":222,"./Script/Hiragana.js":223,"./Script/Imperial_Aramaic.js":224,"./Script/Inherited.js":225,"./Script/Inscriptional_Pahlavi.js":226,"./Script/Inscriptional_Parthian.js":227,"./Script/Javanese.js":228,"./Script/Kaithi.js":229,"./Script/Kannada.js":230,"./Script/Katakana.js":231,"./Script/Kayah_Li.js":232,"./Script/Kharoshthi.js":233,"./Script/Khitan_Small_Script.js":234,"./Script/Khmer.js":235,"./Script/Khojki.js":236,"./Script/Khudawadi.js":237,"./Script/Lao.js":238,"./Script/Latin.js":239,"./Script/Lepcha.js":240,"./Script/Limbu.js":241,"./Script/Linear_A.js":242,"./Script/Linear_B.js":243,"./Script/Lisu.js":244,"./Script/Lycian.js":245,"./Script/Lydian.js":246,"./Script/Mahajani.js":247,"./Script/Makasar.js":248,"./Script/Malayalam.js":249,"./Script/Mandaic.js":250,"./Script/Manichaean.js":251,"./Script/Marchen.js":252,"./Script/Masaram_Gondi.js":253,"./Script/Medefaidrin.js":254,"./Script/Meetei_Mayek.js":255,"./Script/Mende_Kikakui.js":256,"./Script/Meroitic_Cursive.js":257,"./Script/Meroitic_Hieroglyphs.js":258,"./Script/Miao.js":259,"./Script/Modi.js":260,"./Script/Mongolian.js":261,"./Script/Mro.js":262,"./Script/Multani.js":263,"./Script/Myanmar.js":264,"./Script/Nabataean.js":265,"./Script/Nandinagari.js":266,"./Script/New_Tai_Lue.js":267,"./Script/Newa.js":268,"./Script/Nko.js":269,"./Script/Nushu.js":270,"./Script/Nyiakeng_Puachue_Hmong.js":271,"./Script/Ogham.js":272,"./Script/Ol_Chiki.js":273,"./Script/Old_Hungarian.js":274,"./Script/Old_Italic.js":275,"./Script/Old_North_Arabian.js":276,"./Script/Old_Permic.js":277,"./Script/Old_Persian.js":278,"./Script/Old_Sogdian.js":279,"./Script/Old_South_Arabian.js":280,"./Script/Old_Turkic.js":281,"./Script/Oriya.js":282,"./Script/Osage.js":283,"./Script/Osmanya.js":284,"./Script/Pahawh_Hmong.js":285,"./Script/Palmyrene.js":286,"./Script/Pau_Cin_Hau.js":287,"./Script/Phags_Pa.js":288,"./Script/Phoenician.js":289,"./Script/Psalter_Pahlavi.js":290,"./Script/Rejang.js":291,"./Script/Runic.js":292,"./Script/Samaritan.js":293,"./Script/Saurashtra.js":294,"./Script/Sharada.js":295,"./Script/Shavian.js":296,"./Script/Siddham.js":297,"./Script/SignWriting.js":298,"./Script/Sinhala.js":299,"./Script/Sogdian.js":300,"./Script/Sora_Sompeng.js":301,"./Script/Soyombo.js":302,"./Script/Sundanese.js":303,"./Script/Syloti_Nagri.js":304,"./Script/Syriac.js":305,"./Script/Tagalog.js":306,"./Script/Tagbanwa.js":307,"./Script/Tai_Le.js":308,"./Script/Tai_Tham.js":309,"./Script/Tai_Viet.js":310,"./Script/Takri.js":311,"./Script/Tamil.js":312,"./Script/Tangut.js":313,"./Script/Telugu.js":314,"./Script/Thaana.js":315,"./Script/Thai.js":316,"./Script/Tibetan.js":317,"./Script/Tifinagh.js":318,"./Script/Tirhuta.js":319,"./Script/Ugaritic.js":320,"./Script/Vai.js":321,"./Script/Wancho.js":322,"./Script/Warang_Citi.js":323,"./Script/Yezidi.js":324,"./Script/Yi.js":325,"./Script/Zanabazar_Square.js":326,"./Script_Extensions/Adlam.js":327,"./Script_Extensions/Ahom.js":328,"./Script_Extensions/Anatolian_Hieroglyphs.js":329,"./Script_Extensions/Arabic.js":330,"./Script_Extensions/Armenian.js":331,"./Script_Extensions/Avestan.js":332,"./Script_Extensions/Balinese.js":333,"./Script_Extensions/Bamum.js":334,"./Script_Extensions/Bassa_Vah.js":335,"./Script_Extensions/Batak.js":336,"./Script_Extensions/Bengali.js":337,"./Script_Extensions/Bhaiksuki.js":338,"./Script_Extensions/Bopomofo.js":339,"./Script_Extensions/Brahmi.js":340,"./Script_Extensions/Braille.js":341,"./Script_Extensions/Buginese.js":342,"./Script_Extensions/Buhid.js":343,"./Script_Extensions/Canadian_Aboriginal.js":344,"./Script_Extensions/Carian.js":345,"./Script_Extensions/Caucasian_Albanian.js":346,"./Script_Extensions/Chakma.js":347,"./Script_Extensions/Cham.js":348,"./Script_Extensions/Cherokee.js":349,"./Script_Extensions/Chorasmian.js":350,"./Script_Extensions/Common.js":351,"./Script_Extensions/Coptic.js":352,"./Script_Extensions/Cuneiform.js":353,"./Script_Extensions/Cypriot.js":354,"./Script_Extensions/Cyrillic.js":355,"./Script_Extensions/Deseret.js":356,"./Script_Extensions/Devanagari.js":357,"./Script_Extensions/Dives_Akuru.js":358,"./Script_Extensions/Dogra.js":359,"./Script_Extensions/Duployan.js":360,"./Script_Extensions/Egyptian_Hieroglyphs.js":361,"./Script_Extensions/Elbasan.js":362,"./Script_Extensions/Elymaic.js":363,"./Script_Extensions/Ethiopic.js":364,"./Script_Extensions/Georgian.js":365,"./Script_Extensions/Glagolitic.js":366,"./Script_Extensions/Gothic.js":367,"./Script_Extensions/Grantha.js":368,"./Script_Extensions/Greek.js":369,"./Script_Extensions/Gujarati.js":370,"./Script_Extensions/Gunjala_Gondi.js":371,"./Script_Extensions/Gurmukhi.js":372,"./Script_Extensions/Han.js":373,"./Script_Extensions/Hangul.js":374,"./Script_Extensions/Hanifi_Rohingya.js":375,"./Script_Extensions/Hanunoo.js":376,"./Script_Extensions/Hatran.js":377,"./Script_Extensions/Hebrew.js":378,"./Script_Extensions/Hiragana.js":379,"./Script_Extensions/Imperial_Aramaic.js":380,"./Script_Extensions/Inherited.js":381,"./Script_Extensions/Inscriptional_Pahlavi.js":382,"./Script_Extensions/Inscriptional_Parthian.js":383,"./Script_Extensions/Javanese.js":384,"./Script_Extensions/Kaithi.js":385,"./Script_Extensions/Kannada.js":386,"./Script_Extensions/Katakana.js":387,"./Script_Extensions/Kayah_Li.js":388,"./Script_Extensions/Kharoshthi.js":389,"./Script_Extensions/Khitan_Small_Script.js":390,"./Script_Extensions/Khmer.js":391,"./Script_Extensions/Khojki.js":392,"./Script_Extensions/Khudawadi.js":393,"./Script_Extensions/Lao.js":394,"./Script_Extensions/Latin.js":395,"./Script_Extensions/Lepcha.js":396,"./Script_Extensions/Limbu.js":397,"./Script_Extensions/Linear_A.js":398,"./Script_Extensions/Linear_B.js":399,"./Script_Extensions/Lisu.js":400,"./Script_Extensions/Lycian.js":401,"./Script_Extensions/Lydian.js":402,"./Script_Extensions/Mahajani.js":403,"./Script_Extensions/Makasar.js":404,"./Script_Extensions/Malayalam.js":405,"./Script_Extensions/Mandaic.js":406,"./Script_Extensions/Manichaean.js":407,"./Script_Extensions/Marchen.js":408,"./Script_Extensions/Masaram_Gondi.js":409,"./Script_Extensions/Medefaidrin.js":410,"./Script_Extensions/Meetei_Mayek.js":411,"./Script_Extensions/Mende_Kikakui.js":412,"./Script_Extensions/Meroitic_Cursive.js":413,"./Script_Extensions/Meroitic_Hieroglyphs.js":414,"./Script_Extensions/Miao.js":415,"./Script_Extensions/Modi.js":416,"./Script_Extensions/Mongolian.js":417,"./Script_Extensions/Mro.js":418,"./Script_Extensions/Multani.js":419,"./Script_Extensions/Myanmar.js":420,"./Script_Extensions/Nabataean.js":421,"./Script_Extensions/Nandinagari.js":422,"./Script_Extensions/New_Tai_Lue.js":423,"./Script_Extensions/Newa.js":424,"./Script_Extensions/Nko.js":425,"./Script_Extensions/Nushu.js":426,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":427,"./Script_Extensions/Ogham.js":428,"./Script_Extensions/Ol_Chiki.js":429,"./Script_Extensions/Old_Hungarian.js":430,"./Script_Extensions/Old_Italic.js":431,"./Script_Extensions/Old_North_Arabian.js":432,"./Script_Extensions/Old_Permic.js":433,"./Script_Extensions/Old_Persian.js":434,"./Script_Extensions/Old_Sogdian.js":435,"./Script_Extensions/Old_South_Arabian.js":436,"./Script_Extensions/Old_Turkic.js":437,"./Script_Extensions/Oriya.js":438,"./Script_Extensions/Osage.js":439,"./Script_Extensions/Osmanya.js":440,"./Script_Extensions/Pahawh_Hmong.js":441,"./Script_Extensions/Palmyrene.js":442,"./Script_Extensions/Pau_Cin_Hau.js":443,"./Script_Extensions/Phags_Pa.js":444,"./Script_Extensions/Phoenician.js":445,"./Script_Extensions/Psalter_Pahlavi.js":446,"./Script_Extensions/Rejang.js":447,"./Script_Extensions/Runic.js":448,"./Script_Extensions/Samaritan.js":449,"./Script_Extensions/Saurashtra.js":450,"./Script_Extensions/Sharada.js":451,"./Script_Extensions/Shavian.js":452,"./Script_Extensions/Siddham.js":453,"./Script_Extensions/SignWriting.js":454,"./Script_Extensions/Sinhala.js":455,"./Script_Extensions/Sogdian.js":456,"./Script_Extensions/Sora_Sompeng.js":457,"./Script_Extensions/Soyombo.js":458,"./Script_Extensions/Sundanese.js":459,"./Script_Extensions/Syloti_Nagri.js":460,"./Script_Extensions/Syriac.js":461,"./Script_Extensions/Tagalog.js":462,"./Script_Extensions/Tagbanwa.js":463,"./Script_Extensions/Tai_Le.js":464,"./Script_Extensions/Tai_Tham.js":465,"./Script_Extensions/Tai_Viet.js":466,"./Script_Extensions/Takri.js":467,"./Script_Extensions/Tamil.js":468,"./Script_Extensions/Tangut.js":469,"./Script_Extensions/Telugu.js":470,"./Script_Extensions/Thaana.js":471,"./Script_Extensions/Thai.js":472,"./Script_Extensions/Tibetan.js":473,"./Script_Extensions/Tifinagh.js":474,"./Script_Extensions/Tirhuta.js":475,"./Script_Extensions/Ugaritic.js":476,"./Script_Extensions/Vai.js":477,"./Script_Extensions/Wancho.js":478,"./Script_Extensions/Warang_Citi.js":479,"./Script_Extensions/Yezidi.js":480,"./Script_Extensions/Yi.js":481,"./Script_Extensions/Zanabazar_Square.js":482,"./index.js":483,"./unicode-version.js":484};function i(n){var e=s(n);return t(e)}function s(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=s,n.exports=i,i.id=79}},[[54,1,2]]]);
//# sourceMappingURL=main.ddb25df4.chunk.js.map