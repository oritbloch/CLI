const saver = require('./saveJsonInFile');

const request = require('request-promise');
const cheerio = require('cheerio');



const fileName='results.json';


async function crawl (current_url) 
{
  
  try {
    // Make an HTTP GET request to the target website
    let html = await request(current_url)
      
    
      let $ = cheerio.load(html);
      
      // Extract the images from the page
      $('img').each((i, el) => {
        let href=$(el).attr('src');
        allResultsData.push(
          {
              imageUrl:href,
              sourceUrl:current_url,
              depth:depth_counter+1
          });
          
      });
      
      // Extract the links from the page
      $('a').each((i, link) => {
        let href=$(link).attr('href');
        queue.push(href);
      });
      
    }
    catch (error) {
      console.error(error);
    }
}



// Function to crawl the next URL in the queue
async function next()
{
  // Get the next URL from the queue
  let current_url = queue.shift();

  await crawl(current_url);
   
  }
  function CallbackToSaveData()
  {
    
  if (allResultsData!='[]' )
    {
      
      saver.SaveJson(fileName,allResultsData);
    }
  }

  async function startOver(CallbackToSaveData)
  {
    
  while(depth_counter>0)
  {
     while(queue.length>0)
     {
    await  next();
    
     }
     depth_counter--;
  }
  
  CallbackToSaveData(null,null);
  }

if (process.argv.length === 3) {
    console.error('Expected 2 arguments!');
    process.exit(1);
  }

  var url = process.argv[2];
  var depth_counter = process.argv[3];


  if (depth_counter==0)
  {
    depth_counter=1;
  }

  // Queue of URLs to visit
  var queue = [url];
  
  var allResultsData=[] ;

 startOver(CallbackToSaveData);


  




