# Instagram-post (in React)!

### 

LICENSE AGPL-3
No redistribution but for strategy of parts, unless retributed

how to use
    
instagrampost1.js - manually copy embed code (without end script!!!)

    export const iGpostScript1 = `<blockquote
      class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/p/CWJAIkzLUGp/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
      style="
      ...
      </blockquote>
      --<script></script>
    `

app.js

    import InstagramEmbed from "react-instagram-embed"//"./InstagramEmbed";
    import { iGpostScript1 } from "./instagrampost1";

    <InstagramEmbed script={iGpostScript1} onLoad={()=>{}}/>


SEE LICENSE IN LICENSE.lz.txt

(please help with bundler for classes, not using a bundler (peerDeps required, spa))
copying the src code? https://github.com/npm/cli/issues/3514
npm install --force && npm uninstall @babel/polyfill --save ...