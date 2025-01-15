import{S as f,i as n}from"./assets/vendor-B07T6_gy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y=t=>{const a=new URLSearchParams({key:"19040716-d2ab54626dacf9b7f6f91612a",q:t,per_page:18,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>s.hits)},h={captionsData:"alt",captionDelay:250,overlayOpacity:.85,animationSpeed:350,preloading:!1,widthRatio:.9,heightRatio:.8,fadeSpeed:400},g=t=>{document.querySelector(".gallery").innerHTML=t.map(({webformatURL:a,largeImageURL:s,tags:o,likes:e,views:r,comments:i,downloads:m})=>`   <li class="gallery-item">
            <a
              class="gallery-link"
              href=${s}
            >
              <img
                class="gallery-image"
                src=${a}
                data-source=${s}
                alt='${o}'
              />
                 
              <ul class="description">
                <li class="descr-item">
                  <p class="descr-text">
                    Likes<span class="descr-span">${e}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Views<span class="descr-span">${r}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Comments<span class="descr-span">${i}</span>
                  </p>
                </li>
                <li class="descr-item">
                  <p class="descr-text">
                    Downloads<span class="descr-span">${m}</span>
                  </p>
                </li>
              </ul>
            </a>
          </li>`).join(""),new f(".gallery .gallery-link",h)};n.settings({position:"topCenter",timeout:3500,transitionIn:"bounceInDown"});const l=document.querySelector(".search-form"),c=document.querySelector(".loader"),u=document.querySelector(".gallery");l.addEventListener("submit",L);function L(t){t.preventDefault();const a=t.currentTarget.elements.userQuery.value.trim();if(a.length===0){n.error({message:"Please, enter your search query!"}),l.reset();return}p(!1),d(!0),setTimeout(()=>{y(a).finally(l.reset(),d(!1)).then(s=>{s.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),g(s),p(!0)}).catch(s=>{console.log(s),n.error({message:"Please, try again"})})},1500)}function d(t){t?c.classList.remove("visually-hidden"):c.classList.add("visually-hidden")}function p(t){t?u.classList.remove("visually-hidden"):u.classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map
