Hi!
I just now finished 4 hours of writing the program.
The task includes 2 files:
crawler.js
saveJsonInFile.js

For running it, you should have these libraries installed:
"request-promise" and "cheerio".

The program getts 2 input arguments: url and depth number and saves the results to a local file named results.json.

I must admit that it is my first nodeJs project...

If I had more time:
1. I probably wrote it more cleaned and organized.
2. I whould seperate the logic async functions into another file.
3. I would add more validation and testing modules.

The reason that I used async functions is to get all the urls done without making the program stuck on each calling.
I faced the problem of calculating all data before saving it, I solved it by using a "Promise class".


Known Issues: (If I just had more time...)

1. when requesting a url->  cause: Error: unable to get local issuer certificate
      at TLSSocket.onConnectSecure (node:_tls_wrap:1538:34)
      at TLSSocket.emit (node:events:513:28)
      at TLSSocket._finishInit (node:_tls_wrap:952:8)
      at ssl.onhandshakedone (node:_tls_wrap:733:12)
      
      This is probably becasuse of some configuration issues in my user/PC.


2. The checking if the object is empty is not working as I wrote it.
   I assume there is much better way to check:
 if (allResultsData!='[]' ).


It was pretty fun after all!

If there are any more question please feel free to ask:)

Orit



