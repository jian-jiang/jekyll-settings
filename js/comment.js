var language="en_US";
if (navigator.language) {
  language = navigator.language;
}
else  if(navigator.browserLanguage) {
  language =navigator.browserLanguage;
}
var l= new String(language);
var lr="";
lr=l[0]+l[1];
console.log(lr);

/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'jiananjiang'; // required: replace example with your forum shortname
var disqus_config = function () {
  this.language = lr;
};
/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
