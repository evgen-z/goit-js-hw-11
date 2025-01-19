import{i as u,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const y=s=>{const e=new URLSearchParams({key:"529440-adfab00ac2bbbc69c0a669d95",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"18"});return fetch(`https://pixabay.com/api/?${e}`).then(o=>{if(!o.ok)throw new Error(error);return o.json()})};function h(s){return s.map(e=>`
        <a class="gallery-link" href="${e.largeImageURL}">
        <div class="gallery-under">
		<img 
			class="gallery-image" 
			src="${e.webformatURL}" 
			alt="${e.tags}" 
			/>
            <ul class="gallery-info">
        <li class="gallery-info-item">
          <h3>Likes</h3>
          <p>${e.likes}</p>
        </li>
        <li class="gallery-info-item">
          <h3>Views</h3>
          <p>${e.views}</p>
        </li>
        <li class="gallery-info-item">
          <h3>Comments</h3>
          <p>${e.comments}</p>
        </li>
        <li class="gallery-info-item">
          <h3>Downloads</h3>
          <p>${e.downloads}</p>
        </li>
      </ul></div>
	</a>
      `).join("")}const f=document.querySelector(".search-form"),a=document.querySelector(".gallery"),l=document.querySelector(".loader");let n;l.style.display="none";const m=s=>{s.preventDefault();const e=s.currentTarget.elements.query.value.trim();if(a.innerHTML="",e===""){u.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",titleColor:"#FAFAFB",iconColor:"#FAFAFB"});return}l.style.display="block",y(e).then(o=>{if(o.total===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconColor:"#FAFAFB"}),a.innerHTML="",l.style.display="none",f.reset();return}a.innerHTML=h(o.hits),n?n.refresh():n=new d(".gallery a"),l.style.display="none"}).catch(o=>{console.log(o)})};f.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
