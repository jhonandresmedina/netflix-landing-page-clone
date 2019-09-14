const SHOW_CLASS = "show";
const TAB_BORDER_CLASS = "tab-border";
const selectAll = selector => document.querySelectorAll(selector);
const select = selector => document.querySelector(selector);
const tabItems = selectAll(".tab-item");
const tabContentItems = selectAll(".tab-content-item");

const removeClassFromAllItems = (items, className) =>
  items.forEach(item => item.classList.remove(className));

const addClass = (item, className) => item.classList.add(className);

function onClickSelectItem(event) {
  removeClassFromAllItems(tabItems, TAB_BORDER_CLASS);
  removeClassFromAllItems(tabContentItems, SHOW_CLASS);
  addClass(this, TAB_BORDER_CLASS);
  addClass(select(`#${this.id}-content`), SHOW_CLASS);
}

tabItems.forEach(item => item.addEventListener("click", onClickSelectItem));
