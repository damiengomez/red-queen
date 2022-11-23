// Cart error toast trigger
document.querySelectorAll('.cart-error-toast').forEach(function(carterrorToastTrigger) {
  cartToastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(document.querySelector('#carterrorToast'))
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