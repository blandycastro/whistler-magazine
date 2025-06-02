  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  (function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
      '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
  })();


  googletag.cmd.push(function() {
    googletag.defineSlot('/4326737/atex_GNG-BC_site_section_subsection_728x90_S1_RON_GNG-network', [[728, 90], [300, 50]], 'div-gpt-ad-1440115387544-0').addService(googletag.pubads());
    googletag.defineSlot('/4326737/atex_GNG-BC_site_section_subsection_300x250_S1_RON_GNG-network', [[300, 250], [300, 50]], 'div-gpt-ad-1440115387544-1').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().setTargeting('site', ['WHISTLERMAGAZINE']);
    googletag.enableServices();
  });
