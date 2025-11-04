<template>
    <section class="best-sellers" id="best-sellers-section">
            <h1>Best Sellers</h1>
            <hr>
            <div class="product-slider">
                <div class="container">

                    <div class="product new">
                        <div class="product-picture">
                            <img src="../assets/images/vr1.jpg" alt="product: Penom Case">
                        </div>
                        <div class="product-info">
                            <h5 class="categories">Headsets, Apple</h5>
                            <h4 class="title">Apple Headset</h4>
                            <h3 class="price">
                                <span>US$ 450.00</span>
                            </h3>
                            <button>Add to bag</button>
                        </div>
                    </div>

                    <div class="product new">
                        <div class="product-picture">
                            <img src="../assets/images/vr2.jpg" alt="product: Noise Cancelling Headphone">
                        </div>
                        <div class="product-info">
                            <h5 class="categories">Headsets, PS</h5>
                            <h4 class="title">Playstation Headset</h4>
                            <h3 class="price">
                                <span>US$ 399.99</span>
                            </h3>
                            <button>Add to bag</button>
                        </div>
                    </div>

                    <div class="product">
                        <div class="product-picture">
                            <img src="../assets/images/vr3.jpg" alt="product: Canon Digital SLR EOS Rebel T6">
                        </div>
                        <div class="product-info">
                            <h5 class="categories">Headsets, Oculus</h5>
                            <h4 class="title">Oculus Headset</h4>
                            <h3 class="price">
                                <span class="discounted-price">US$ 349.99</span>
                                <span class="original-price">US$ 419.99</span>
                            </h3>
                            <button>Add to bag</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

</template>


<script>
export default {
  name: 'BestSeller'  // multi-word name (see next error)
}
</script>