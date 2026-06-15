const menuItems = {
  primary: [
    { label: "置き場トップ", href: "poipiku/index.html" },
  ],
  videos: [
    { label: "振り返る帳守", href: "tobarimori.html" },
    { label: "発砲🎂バースデー", href: "arata.html" },
    { label: "星を見る白瀬", href: "shirose-star.html" },
    { label: "カジノの浬", href: "kairi-casino.html" },
    { label: "作業中の煤ヶ谷", href: "susugaya.html" },
    { label: "銃を向ける白瀬", href: "shirose.html" },
    { label: "哩ショートダンス", href: "mairu.html" },
    { label: "浬？の動画", href: "kairi.html" },
  ],
  secondary: [
    { label: "リンク集トップ", href: "index.html" },
  ],
};

function getPageDepthPrefix() {
  const path = window.location.pathname.replace(/\\/g, "/");
  return path.includes("/poipiku/") ? "../" : "";
}

function buildMenuHref(href, prefix) {
  if (!prefix) {
    return href;
  }

  if (href.startsWith("poipiku/")) {
    return href.replace("poipiku/", "");
  }

  return `${prefix}${href}`;
}

function isCurrentPage(href, prefix) {
  const currentPath = window.location.pathname.replace(/\\/g, "/");
  const targetHref = buildMenuHref(href, prefix);

  return currentPath.endsWith(`/${targetHref}`);
}

document.querySelectorAll(".menu-panel").forEach((menuPanel) => {
  const prefix = getPageDepthPrefix();
  const videoList = document.createElement("div");
  const videoAccordion = document.createElement("details");
  const videoSummary = document.createElement("summary");
  const isVideoPage = menuItems.videos.some((item) => isCurrentPage(item.href, prefix));

  function createMenuLink(item) {
    const link = document.createElement("a");
    link.href = buildMenuHref(item.href, prefix);
    link.textContent = item.label;

    if (isCurrentPage(item.href, prefix)) {
      link.setAttribute("aria-current", "page");
    }

    return link;
  }

  videoAccordion.className = "menu-accordion";
  videoAccordion.open = isVideoPage;
  videoSummary.textContent = "動画ページ";
  videoList.className = "menu-accordion-list";
  videoList.append(...menuItems.videos.map(createMenuLink));
  videoAccordion.append(videoSummary, videoList);

  menuPanel.replaceChildren(
    ...menuItems.primary.map(createMenuLink),
    videoAccordion,
    ...menuItems.secondary.map(createMenuLink),
  );
});
