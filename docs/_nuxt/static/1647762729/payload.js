__NUXT_JSONP__("/", (function(a,b,c,d,e,f,g,h,i){return {data:[{_img:{}}],fetch:{"data-v-77a56bd7:0":{data:{status:"ok",feed:{url:"https:\u002F\u002Fmedium.com\u002Ffeed\u002F@moizsohail",title:c,link:"https:\u002F\u002Fmedium.com\u002F@moizsohail?source=rss-3ca546ce8da0------2",author:"",description:c,image:"https:\u002F\u002Fcdn-images-1.medium.com\u002Ffit\u002Fc\u002F150\u002F150\u002F0*ysUgNxhV6qK3Uz8t"},items:[{title:"Chrome Extension In React With NPM Modules: Part 3",pubDate:"2022-03-03 19:39:39",link:"https:\u002F\u002Ftowardsdev.com\u002Fchrome-extension-in-react-with-npm-modules-part-3-964fa73476bf?source=rss-3ca546ce8da0------2",guid:"https:\u002F\u002Fmedium.com\u002Fp\u002F964fa73476bf",author:a,thumbnail:"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*BqI_YCyCIwUyiBTcNW2p0w.jpeg",description:d,content:d,enclosure:{},categories:["node-modules","javascript","extension","typescript-with-react",b]},{title:"Chrome Extension In React With NPM Modules: Part 2",pubDate:"2022-03-03 14:28:16",link:"https:\u002F\u002Ftowardsdev.com\u002Fchrome-extension-in-react-with-npm-modules-part-2-4af6fdfc9ff5?source=rss-3ca546ce8da0------2",guid:"https:\u002F\u002Fmedium.com\u002Fp\u002F4af6fdfc9ff5",author:a,thumbnail:"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*yVl2Bc_lq7o4d2rojdoG4Q.jpeg",description:e,content:e,enclosure:{},categories:[f,g,h,"npm-module",b]},{title:"Chrome Extension In React With NPM Modules: Part 1",pubDate:"2022-03-03 06:10:29",link:"https:\u002F\u002Ftowardsdev.com\u002Fchrome-extension-in-react-with-npm-modules-part-1-33a0f9de49aa?source=rss-3ca546ce8da0------2",guid:"https:\u002F\u002Fmedium.com\u002Fp\u002F33a0f9de49aa",author:a,thumbnail:"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*XqbSEPUIkYAMouorr_MRWA.jpeg",description:i,content:i,enclosure:{},categories:[h,b,g,"npm",f]}]}}},mutations:[]}}("Moiz Sohail","chrome-extension","Stories by Moiz Sohail on Medium","\n\u003Cp\u003EWelcome to the final part of the series Chrome Extension In React With NPM Modules. Do go over \u003Ca href=\"https:\u002F\u002Fmedium.com\u002F@moizsohail\u002Fchrome-extension-in-react-with-npm-modules-part-1-33a0f9de49aa\"\u003EPart 1\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fmedium.com\u002F@moizsohail\u002Fchrome-extension-in-react-with-npm-modules-part-2-4af6fdfc9ff5\"\u003EPart 2\u003C\u002Fa\u003E before continuing.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*BqI_YCyCIwUyiBTcNW2p0w.jpeg\"\u003E\u003C\u002Ffigure\u003E\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F702\u002F1*FiMNawnl3k00OnPkSafsWw.png\"\u003E\u003C\u002Ffigure\u003E\u003Ch3\u003EAdding Our MooModule\u003C\u002Fh3\u003E\n\u003Cp\u003ELet’s update our Home.tsx. I have added comments to highlight any new changes.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Fd8a2e15eeeb52c8159b6c461c3bd76da\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Fd8a2e15eeeb52c8159b6c461c3bd76da\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EFinally, update your content.ts\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002F857e460cc4fbb70141de3b0d3e819246\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002F857e460cc4fbb70141de3b0d3e819246\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EIf in case, you are getting Use compiler option ‘ — downlevelIteration’ to allow iterating of iterators just goto tsconfig.json and change the target key to “es6”.\u003C\u002Fp\u003E\n\u003Cp\u003ENow build your app. You may have to reload the extension from the extensions tab and even reload the page to inject the new content script. I tried it on this \u003Ca href=\"https:\u002F\u002Fwww.google.com\u002Fsearch?q=javascript&amp;tbm=isch&amp;ved=2ahUKEwiNw-no0qr2AhXdEmMBHdULBi0Q2-cCegQIABAA&amp;oq=javascript&amp;gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BAgAEEM6BwgAELEDEEM6CAgAELEDEIMBOgsIABCABBCxAxCDAToKCAAQsQMQgwEQQzoECAAQA1CyDVihGmCaG2gAcAB4AIAB6QKIAZEQkgEFMi04LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&amp;sclient=img&amp;ei=DxMhYs3_Kt2ljLsP1ZeY6AI\"\u003Epage\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*jdi7pqFHxIqx31Bd6atLfg.png\"\u003E\u003C\u002Ffigure\u003E\u003Ch3\u003EJust Some Bonus\u003C\u002Fh3\u003E\n\u003Cp\u003ELet’s try to add connect our keyboard shortcut with our content script. In the previous article if you remember we added the following lines in the background.ts.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Fd4258ff1ac2343ca18c895f6aee70468\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Fd4258ff1ac2343ca18c895f6aee70468\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EWhat this does is it listens for any keyboard command described in the manifest.json and handles its execution by sending a message to the content script. Before we go further, I thought I should introduce the concept of persistence in the chrome extension.\u003C\u002Fp\u003E\n\u003Cp\u003EThe API for this is chrome.storage.sync.set and chrome.storage.sync.get. Their functionality is pretty self-descriptive so I won’t delve deeper into it. Now let’s update our content.ts.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002F6f43fa6611346c46e16d2df0770a5f60\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002F6f43fa6611346c46e16d2df0770a5f60\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EGreat! Now our extension remembers the last executed text. If we punch in the keyboard combination it will execute our mooExtension.\u003C\u002Fp\u003E\n\u003Cp\u003EIf the shortcut doesn’t work, go to chrome:\u002F\u002Fextensions\u002Fshortcuts and see if the shortcut is set. If not it’s probably taken up by something else in your system.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*5X29Lsvv7j2d0IGSnH56Iw.png\"\u003E\u003C\u002Ffigure\u003E\u003Cp\u003EUpdate it with the new shortcut. And try it on the image below.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F225\u002F1*LQz-_nLDXy0FrlUCIC88Uw.jpeg\"\u003E\u003C\u002Ffigure\u003E\u003Ch3\u003EWe’re Done\u003C\u002Fh3\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Fd815a5dd6cf409869c93c78377ce08ab\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Fd815a5dd6cf409869c93c78377ce08ab\u002Fhref\u003C\u002Fa\u003E\u003Ch3\u003EThe Potential\u003C\u002Fh3\u003E\n\u003Cp\u003ENow whenever I learn something, I always think in terms of what you can actually build. For me, it was just automating a couple of forms so that I do not have to fill them in again and again. Or maybe a tool that remembers your current progress of your favorite anime on some streaming site in case if you come back to it months after. If you are looking for something complicated, you can try integrating it into your desktop python application. Just like IDM. The possibilities are endless.\u003C\u002Fp\u003E\n\u003Cp\u003EFull code is \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FMoizsohail\u002FChromeExtensionTutorial\"\u003Ehere\u003C\u002Fa\u003E also check out my \u003Ca href=\"https:\u002F\u002Fmoizsohail.github.io\u002Fportfolio\u002F\"\u003Eportfolio\u003C\u002Fa\u003E while you’re at it.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*xyKh9gsLV_dLapEYLKOOLw.png\"\u003E\u003C\u002Ffigure\u003E\u003Cimg src=\"https:\u002F\u002Fmedium.com\u002F_\u002Fstat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=964fa73476bf\" width=\"1\" height=\"1\" alt=\"\"\u003E\u003Chr\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Ftowardsdev.com\u002Fchrome-extension-in-react-with-npm-modules-part-3-964fa73476bf\"\u003EChrome Extension In React With NPM Modules: Part 3\u003C\u002Fa\u003E was originally published in \u003Ca href=\"https:\u002F\u002Ftowardsdev.com\u002F\"\u003ETowards Dev\u003C\u002Fa\u003E on Medium, where people are continuing the conversation by highlighting and responding to this story.\u003C\u002Fp\u003E\n","\n\u003Cp\u003EWelcome back, this is part 2 of the previous article \u003Ca href=\"https:\u002F\u002Fmedium.com\u002F@moizsohail\u002Fchrome-extension-in-react-with-npm-modules-part-1-33a0f9de49aa\"\u003EChrome Extension In React With NPM Modules: Part 1\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*yVl2Bc_lq7o4d2rojdoG4Q.jpeg\"\u003E\u003C\u002Ffigure\u003E\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002F2f961d262e0e6fc91e05072c2f6b6c9a\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002F2f961d262e0e6fc91e05072c2f6b6c9a\u002Fhref\u003C\u002Fa\u003E\u003Ch3\u003ELet’s Go\u003C\u002Fh3\u003E\n\u003Cp\u003ELet’s get the dependencies ready.\u003C\u002Fp\u003E\n\u003Cpre\u003Enpm i \u003Ca href=\"http:\u002F\u002Ftwitter.com\u002Frollup\u002Fplugin-typescript\"\u003E@rollup\u002Fplugin-typescript\u003C\u002Fa\u003E --save-dev\u003Cbr\u003Enpm i \u003Ca href=\"http:\u002F\u002Ftwitter.com\u002Frollup\u002Fplugin-node-resolve\"\u003E@rollup\u002Fplugin-node-resolve\u003C\u002Fa\u003E --save-dev\u003Cbr\u003Enpm i rollup @types\u002Fchrome --save-dev\u003C\u002Fpre\u003E\n\u003Ch3\u003EOur Rollup Config\u003C\u002Fh3\u003E\n\u003Cp\u003EAdd the following piece of code to the root directory of your project. This is the rollup config that will tell our rollup bundler what files to bundle. This is an important piece of code. And, I think it’s best if we can spend some time on it.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Fbd45953747adc6fd58455e57d6485018\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Fbd45953747adc6fd58455e57d6485018\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EAccording to our config file, our bundler takes in content.ts and background.ts and converts them into content.js and background.js. But what’s iife? And what’s nodeResolve in the plugins? Calm down. One at a time.\u003C\u002Fp\u003E\n\u003Cp\u003EFirstly there are different ways to format a file using rollup. And one of them happens to be iife.\u003C\u002Fp\u003E\n\u003Cblockquote\u003Eiife – A self-executing function, suitable for inclusion as a &lt;script&gt; tag. (If you want to create a bundle for your application, you probably want to use this.). \"iife\" stands for \"immediately-invoked \u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FJavaScript\u002FReference\u002FOperators\u002Ffunction\"\u003EFunction Expression\u003C\u002Fa\u003E\"\u003C\u002Fblockquote\u003E\n\u003Cp\u003EStill don’t get it? Basically, if you have a content.ts file and it is importing certain helper functions from say helper.ts. The imported functions in the helper.ts will all be bundled into one big file. That’s it.\u003C\u002Fp\u003E\n\u003Cp\u003EThis is where nodeResolve comes in. In our case, what happens if we try to import cowsay.js from the node_modules directory, it will be unable to do so. The nodeResolve plugin allows the rollup to find these npm modules and, with the help of iife, bundles it all up into one giant ball of code. Tada! That’s the secret.\u003C\u002Fp\u003E\n\u003Ch3\u003EThe Barebones\u003C\u002Fh3\u003E\n\u003Cp\u003ECreate a file called type.ts your src directory.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Fbf5011c2fd0c3c6f2329fac1c6bef063\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Fbf5011c2fd0c3c6f2329fac1c6bef063\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003ECreate a folder called chrome in the src directory and place the content.ts file in it.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002F3e6cb166b47f9e0bd5611827e488f085\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002F3e6cb166b47f9e0bd5611827e488f085\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EIn the same directory create background.ts. We will be using this to handle keyboard shortcuts.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002F953d7cd21d623f1d7f2a43a9bd922801\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002F953d7cd21d623f1d7f2a43a9bd922801\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EYou will be getting an exception Cannot find module ..\u002Fmessaging. Add this in the src directory as messaging.ts. This is just a helper function I created to allow for communication with content_script.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002F75c66592fd5d5f64f1e93c7e15003e47\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002F75c66592fd5d5f64f1e93c7e15003e47\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EWait? What communication? I don’t know if you have noticed this by now but there is a clear boundary for each script. Background script handles some stuff and has access to some stuff. And content script handles and accesses something else as well. All of these scripts work together to make up a chrome extension. And for that, they need to communicate with each other.\u003C\u002Fp\u003E\n\u003Cp\u003EGoing back to the piece of code in messaging.ts, let’s give you some insight into it so that you can modify it according to you. Since the content script lives in each tab, our background script queries for the active tab and sends the message to the respective content script.\u003C\u002Fp\u003E\n\u003Cp\u003EMoving on, let’s update our manifest.json to tell the script where the content and background script are.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002F70cb21a231054028fed7e4f87ad16099\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002F70cb21a231054028fed7e4f87ad16099\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EAlso, don’t forget to add &amp;&amp; rollup --config rollup.config.js in the build script. The build script will look like the following piece of code.\u003C\u002Fp\u003E\n\u003Cpre\u003E\"build\": \"INLINE_RUNTIME_CHUNK=false GENERATE_SOURCEMAP=false react-   scripts build &amp;&amp; rm -rf dist\u002F* &amp;&amp; mv build\u002F* dist &amp;&amp; rollup --config             rollup.config.js\",\u003C\u002Fpre\u003E\n\u003Cp\u003EThis isn’t the best way to write a script. Well, a better way to write it will be to put this all in a separate file and just run that from there. I just don’t want you to worry about that for now. You can do that later onwards as you start building your own extensions.\u003C\u002Fp\u003E\n\u003Cp\u003EAfter this, just build the code and check if there aren’t any errors during the build process.\u003C\u002Fp\u003E\n\u003Ch3\u003EIt’s time for \u003Ca href=\"https:\u002F\u002Fmedium.com\u002F@moizsohail\u002Fchrome-extension-in-react-with-npm-modules-part-3-964fa73476bf\"\u003EPart 3\u003C\u002Fa\u003E\n\u003C\u002Fh3\u003E\n\u003Cp\u003EThis is the final part where we will complete our extension. If you don’t intend to learn how to integrate our Mooo Module you are good to go. But if you are interested and want to learn a thing or two, do go over \u003Ca href=\"https:\u002F\u002Fmedium.com\u002F@moizsohail\u002Fchrome-extension-in-react-with-npm-modules-part-3-964fa73476bf\"\u003Epart 3\u003C\u002Fa\u003E of this series. I will be covering topics like persistent storage that might prove helpful.\u003C\u002Fp\u003E\n\u003Cp\u003EFull code is \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FMoizsohail\u002FChromeExtensionTutorial\"\u003Ehere\u003C\u002Fa\u003E also check out my \u003Ca href=\"https:\u002F\u002Fmoizsohail.github.io\u002Fportfolio\u002F\"\u003Eportfolio\u003C\u002Fa\u003E while you’re at it\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*7gJmh5HSO5UiFn_027nNNg.png\"\u003E\u003C\u002Ffigure\u003E\u003Cimg src=\"https:\u002F\u002Fmedium.com\u002F_\u002Fstat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=4af6fdfc9ff5\" width=\"1\" height=\"1\" alt=\"\"\u003E\u003Chr\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Ftowardsdev.com\u002Fchrome-extension-in-react-with-npm-modules-part-2-4af6fdfc9ff5\"\u003EChrome Extension In React With NPM Modules: Part 2\u003C\u002Fa\u003E was originally published in \u003Ca href=\"https:\u002F\u002Ftowardsdev.com\u002F\"\u003ETowards Dev\u003C\u002Fa\u003E on Medium, where people are continuing the conversation by highlighting and responding to this story.\u003C\u002Fp\u003E\n","bootstrap","typescript","react","\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*XqbSEPUIkYAMouorr_MRWA.jpeg\"\u003E\u003C\u002Ffigure\u003E\u003Cp\u003EChrome extensions have become a part of our lives and they simplify a lot of tasks. Still, the resources on it are still very limited. Most of the tutorials out there cover building extensions with vanilla Javascript. This greatly limits the scale and flexibility of these extensions. So in this tutorial, we will be learning about how to build our chrome extension with React.\u003C\u002Fp\u003E\n\u003Cp\u003EBut then again, you must be wondering how is this article any different from the numerous how to get started on “Chrome Extension With React”. For starters, I will teach you how to integrate your favorite node modules directly into your extension. I have been able to do this after scrounging the internet for several days, and so I thought I should share what I learned.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Fcb5bc396a8da1121cfd4c90d0067b89d\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Fcb5bc396a8da1121cfd4c90d0067b89d\u002Fhref\u003C\u002Fa\u003E\u003Ch3\u003EThe Prerequisites\u003C\u002Fh3\u003E\n\u003Cp\u003EBefore we begin, you need to be aware of how popup, content_script, and background_script interact with each other to make up a chrome extension. If you don’t please check out this \u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=wHZCYi1K664\"\u003ETraversy Media’s\u003C\u002Fa\u003E video. Besides, there are plenty of videos on youtube that you can check out to get started.\u003C\u002Fp\u003E\n\u003Cp\u003EMoreover, you need a basic understanding of React before you begin with this tutorial.\u003C\u002Fp\u003E\n\u003Ch3\u003EKey Components\u003C\u002Fh3\u003E\n\u003Cp\u003EThere are three components that make up a chrome extension: Content Script, Background Script (now known as service workers), and popup.\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong\u003EPopup\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EThis is something most of us are familiar with. This is basically the small container that pops up whenever you click on the icon near your extension area. This is something that we can easily create with ReactJs. Not just that, integrating NPM modules like bootstrap and fakerJS in this part is very easy.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"adblock popup\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F840\u002F1*Ihv50s8xyt6RRSXBIU9edA.png\"\u003E\u003Cfigcaption\u003EExample of the Popup: Adblock Popup\u003C\u002Ffigcaption\u003E\u003C\u002Ffigure\u003E\u003Cp\u003E\u003Cstrong\u003EContent Script\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EThis is the piece of code that is injected into your current tab. For example, in the Twitter page below, if you want to change the background color or maybe fetch the usernames, the content script is the only part of your chrome extension that is able to do so.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F0*vLrfWD4T1WHpR6JO\"\u003E\u003Cfigcaption\u003EPhoto by \u003Ca href=\"https:\u002F\u002Funsplash.com\u002F@lukechesser?utm_source=medium&amp;utm_medium=referral\"\u003ELuke Chesser\u003C\u002Fa\u003E on \u003Ca href=\"https:\u002F\u002Funsplash.com\u002F?utm_source=medium&amp;utm_medium=referral\"\u003EUnsplash\u003C\u002Fa\u003E\u003C\u002Ffigcaption\u003E\u003C\u002Ffigure\u003E\u003Cp\u003E\u003Cstrong\u003EBackground Script\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EThe background script is the place where you want to run long-term tasks. For example, a timer functionality that you want to execute irrespective of the page you are on. Another functionality that the background script offers is the ability to handle keyboard shortcuts.\u003C\u002Fp\u003E\n\u003Cp\u003EThis and the content script is the place where things start to get complicated for our React app. For example, you are trying to create an app that automatically replaces usernames with other fake names. And you know that the best place to get fake usernames is through an npm library called fakerJS. The Npm support in our React app is only limited to the popup file.\u003C\u002Fp\u003E\n\u003Cp\u003EBut obviously, I wouldn’t make you read till here just to tell you this. This is where rollup comes in. Rollup is a javascript bundler and we will use it to combine pieces of code into a larger file.\u003C\u002Fp\u003E\n\u003Cp\u003EWell, let’s not get overwhelmed. We will tackle all these problems one by one.\u003C\u002Fp\u003E\n\u003Ch3\u003EGetting Started\u003C\u002Fh3\u003E\n\u003Cp\u003ELet’s get our React project ready,\u003C\u002Fp\u003E\n\u003Cpre\u003Enpx create-react-app chrome-extension-tutorial --template typescript\u003Cbr\u003Enpm install react-bootstrap bootstrap@5.1.3\u003Cbr\u003Enpm i npm-watch\u003C\u002Fpre\u003E\n\u003Cp\u003EWe will be building a chrome extension that replaces all tweets with the following cowsay generated art.\u003C\u002Fp\u003E\n\u003Cpre\u003E_________________\u003Cbr\u003E( I'm a moooodule )\u003Cbr\u003E -----------------\u003Cbr\u003E        o   ^__^\u003Cbr\u003E         o  (oO)\\_______\u003Cbr\u003E            (__)\\       )\\\u002F\\\u003Cbr\u003E             U  ||----w |\u003Cbr\u003E                ||     ||\u003C\u002Fpre\u003E\n\u003Cp\u003EI know it’s a bit dumb but it's just to introduce you to the concept of integrating npm modules into your project without getting bogged into details. You can choose whatever library you like for this tutorial.\u003C\u002Fp\u003E\n\u003Cp\u003EAlso, update your public\u002Fmanifest.json. We will be using the latest manifest version at the time of writing this article.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002F582b6b0a8dd184454ca8c4e3b54b1f21\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002F582b6b0a8dd184454ca8c4e3b54b1f21\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EAlso, update your package.json.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Fc3d4663ce2469f5f943fd98975771c67\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Fc3d4663ce2469f5f943fd98975771c67\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003ENow if you enter npm run build into your terminal it will build a chrome extension. I also added an npm run dev functionality that automatically rebuilds the app when you make any changes to your app. This makes debugging easier. You will have to install \u003Ca href=\"https:\u002F\u002Fchrome.google.com\u002Fwebstore\u002Fdetail\u002Fextensions-reloader\u002Ffimgfedafeadlieiabdeeaodndnlbhid\"\u003EExtension Reloader\u003C\u002Fa\u003E to quickly reload any new changes after build.\u003C\u002Fp\u003E\n\u003Ch3\u003EAdding our extension to chrome\u003C\u002Fh3\u003E\n\u003Cp\u003EGoto extensions tab (just enter chrome:\u002F\u002Fextensions\u002F as your URL in your new tab) and enable by clicking on the Developer Mode radio button on the top right.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*KW22Db_Os7LsYNHpQYnjgw.png\"\u003E\u003C\u002Ffigure\u003E\u003Cp\u003EYou will get these three new options click on load unpacked and navigate to your project. Click select once you have the dist folder in your root directory selected.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*NFO9FzzTjW_z4AjkWHHN9Q.png\"\u003E\u003C\u002Ffigure\u003E\u003Cp\u003EThere you go we have our Mooo Extension ready.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*NS_EUKSveQbpORth0Z5l-g.png\"\u003E\u003C\u002Ffigure\u003E\u003Cp\u003ENow if you click on this extension. You will get this tiny little popup at the top. If you get till here. Congrats your setup works.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F522\u002F1*d3rVHKrudPBnngP-POrjtw.png\"\u003E\u003C\u002Ffigure\u003E\u003Ch3\u003E\u003Cstrong\u003ECustomizing our Popup\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n\u003Cp\u003EUpdate your App.tsx with the following code.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Ff9ebe4cbbbd2a220b5e88ec274cd7571\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Ff9ebe4cbbbd2a220b5e88ec274cd7571\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003ENow create a folder called components in the src directory and put Home.tsx in it.\u003C\u002Fp\u003E\n\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmedia\u002Fd2076cd78447bf7ed325dc47154bbf18\u002Fhref\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fmedia\u002Fd2076cd78447bf7ed325dc47154bbf18\u002Fhref\u003C\u002Fa\u003E\u003Cp\u003EAnd finally, clean up your App.css and leave out only the .App class selector. This is where you will decide the size of your popup. Punch in whatever values you need.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F628\u002F1*b0ln6C2abflMC395u1_Gqg.png\"\u003E\u003C\u002Ffigure\u003E\u003Ch3\u003EResults\u003C\u002Fh3\u003E\n\u003Cp\u003EYay! Our new popup is ready to go.\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F686\u002F1*SHJkt3WRpffVI3noATAS1Q.png\"\u003E\u003C\u002Ffigure\u003E\u003Ch3\u003EIt’s getting too loooong\u003C\u002Fh3\u003E\n\u003Cp\u003ELet’s continue building the rest of the application in \u003Ca href=\"https:\u002F\u002Fmedium.com\u002F@moizsohail\u002Fchrome-extension-in-react-with-npm-modules-part-2-4af6fdfc9ff5\"\u003Epart 2\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003EFull code \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FMoizsohail\u002FChromeExtensionTutorial\"\u003Erepos\u003C\u002Fa\u003E if you want to skip to it. Also check out my portfolio too: \u003Ca href=\"https:\u002F\u002Fmoizsohail.github.io\u002F\"\u003Ehttps:\u002F\u002Fmoizsohail.github.io\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Cimg alt=\"\" src=\"https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*fsplafmv0DGqY0VVV6UTYA.png\"\u003E\u003C\u002Ffigure\u003E\u003Cp\u003EPlease let me know if you think you need a video for this. I am thinking about starting a youtube channel, but I need a sufficient audience before I do so.\u003C\u002Fp\u003E\n\u003Cimg src=\"https:\u002F\u002Fmedium.com\u002F_\u002Fstat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=33a0f9de49aa\" width=\"1\" height=\"1\" alt=\"\"\u003E\u003Chr\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Ftowardsdev.com\u002Fchrome-extension-in-react-with-npm-modules-part-1-33a0f9de49aa\"\u003EChrome Extension In React With NPM Modules: Part 1\u003C\u002Fa\u003E was originally published in \u003Ca href=\"https:\u002F\u002Ftowardsdev.com\u002F\"\u003ETowards Dev\u003C\u002Fa\u003E on Medium, where people are continuing the conversation by highlighting and responding to this story.\u003C\u002Fp\u003E\n")));