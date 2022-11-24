// Cart toast trigger
document.querySelectorAll('.cart-toast').forEach(function(cartToastTrigger) {
  cartToastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(document.querySelector('#cartToast'))
    toast.show()
  })
})

// Fav toast trigger
document.querySelectorAll('.fav-toast').forEach(function(favToastTrigger) {
  favToastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(document.querySelector('#favToast'))
    toast.show()
  })
})