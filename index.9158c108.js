async function e(e){try{let t=await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn",{method:"POST",headers:{Authorization:"Bearer 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","Content-Type":"application/json"},body:JSON.stringify({inputs:e,parameters:{max_length:150,min_length:40,length_penalty:2,num_beams:4,early_stopping:!0}})});if(!t.ok)throw Error("Failed to get summary");return(await t.json())[0].summary_text}catch(e){return console.error("Summarization error:",e),"Failed to generate summary"}}async function t(n,o){let r=n||document.getElementById("root");if(!r)throw Error("Root element not found");let a=document.createElement("ul");window.addEventListener("hashchange",async()=>{let n=location.hash.substring(1),a=document.createElement("div");try{r.innerHTML="Loading...";let i=await fetch("https://hacker-news.firebaseio.com/v0/item/{id}.json".replace("{id}",n)),c=await i.json(),l=document.createElement("button");l.innerHTML="← Back to News",l.addEventListener("click",()=>{location.hash="",t(r,o)});let m=`
        Title: ${c.title}
        URL Content: ${c.url?c.url:"No URL"}
        Comments: ${c.comments?c.comments.map(e=>e.content).join("\n"):"No comments"}
      `;console.log(m);let s=(await e(m))[0].summary_text;a.innerHTML=`
        <h2>${c.title}</h2>
        <p><strong>Summary:</strong></p>
        <p>${s}</p>
        <p><strong>Original URL:</strong> <a href="${c.url}" target="_blank">${c.url}</a></p>
        <p><strong>Comments:</strong> ${c.comments_count||0}</p>
      `,r.innerHTML="",r.appendChild(l),r.appendChild(a)}catch(e){console.error("Error:",e),r.innerHTML="Error loading content"}});try{r.innerHTML="Loading...";let e=await fetch("https://api.hnpwa.com/v0/news/{page}.json".replace("{page}",o));(await e.json()).forEach(e=>{let t=document.createElement("li"),n=document.createElement("a");n.href=`#${e.id}`,n.innerHTML=`${e.title} (${e.comments_count})`,t.appendChild(n),a.appendChild(t)}),r.innerHTML="",r.appendChild(a)}catch(e){r.innerHTML="Error loading news feed",console.error("Error:",e)}if(o>1){let e=document.createElement("button");e.innerHTML="Previous Page",e.addEventListener("click",()=>{t(r,--o)}),r.appendChild(e)}if(o<10){let e=document.createElement("button");e.innerHTML="Next Page",e.addEventListener("click",()=>{t(r,++o)}),r.appendChild(e)}}if("undefined"!=typeof window){let e=document.getElementById("root");e&&t(e,1)}
//# sourceMappingURL=index.9158c108.js.map
