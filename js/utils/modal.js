
// Global DOM var
const $body = document.getElementById('#photographer');
const $openModalBtn = document.getElementsByClassName('.modal-toogle');
const $mainWrapper = document.getElementsByClassName('.main-wrapper');
const $modal = document.getElementsByClassName('.modal');
const $modalTitle = document.getElementsByClassName('.modal-title');
const $modalCloseBtn = document.getElementsByClassName('.modal-close-btn');
 
// Func
const onOpenModal = () => {
   $mainWrapper.attr('aria-hidden', 'true');
   $modal.attr('aria-hidden', 'false');
   $body.addClass('no-scroll');
   $modal.css('display', 'flex');
   $modalCloseBtn.focus();
}
 
const onCloseModal = () => {
   $mainWrapper.attr('aria-hidden', 'false');
   $modal.attr('aria-hidden', 'true');
   $body.removeClass('no-scroll');
   $modal.css('display', 'none');
   $openModalBtn.focus();
}
 
// Event
//$openModalBtn.addEventListener.click(function() {
  // onOpenModal()
//})
 
// $modalCloseBtn.addEventListener.click(function() {
 //  onCloseModal()
//})
 
// Close modal when espace key is pressed
// $(document).on('keydown', e => {
 //  const keyCode = e.keyCode ? e.keyCode : e.which
 
//   if ($modal.attr('aria-hidden') == 'false' && keyCode === 27) {
//       onCloseModal()
//   }
// })