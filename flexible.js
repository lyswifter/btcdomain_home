(function flexible(window, document) {
  function resetFontSize() {
    const size = (document.documentElement.clientWidth / 1920) * 37.5;
    document.documentElement.style.fontSize = size + 'px';
  }

  // reset root font size on page show or resize
  window.addEventListener('pageshow', resetFontSize);
  window.addEventListener('resize', resetFontSize);
})(window, document);

const Links = {
  doc: "https://docs.btcdomains.io",
  openOrdex: "https://btcdomains.click/openordex-open-2f8217",
  magicEden: "https://magiceden.io/ordinals/marketplace/btcdomain",
  twitter: "http://twitter.com/btcdomain_btc",
  trees: "https://linktr.ee/btcdomain",
  github: "https://github.com/btcdomain",
  discord: 'https://www.discord.gg/btcdomain',
  medium: "http://medium.com/@btcdomain",
  blockchain: 'https://www.blockchain.com/explorer/transactions/btc/5b5bf267481d9d608be4eb14494a2c0440ababae9d7447381975ba75b7de5170',
}
