const accordeon = document.querySelector(".faq__list");
const accordeonTitles = accordeon.querySelectorAll(".faq__question");

accordeonTitles.forEach(function(element) {
  element.addEventListener('click', faqTitleClickHandler);
})

function faqTitleClickHandler(evt) {
  const clickedItem = evt.currentTarget;
  const clickedItemParent = clickedItem.parentElement;
  const clickedDescr = clickedItemParent.querySelector('.faq__answer');
 
  clickedItemParent.classList.toggle('faq__item--open');

  if (clickedItemParent.classList.contains('faq__item--open')) {
    clickedDescr.style.maxHeight = clickedDescr.scrollHeight + "px";
  } else {
    clickedDescr.style.maxHeight = null;
  }
}
