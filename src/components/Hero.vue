<template>
    <section class="hero">

            <img class="desktop" fetchpriority="high" src="../assets/images/Hero_Desktop_r1_11zon.jpg">
            <img class="mobile" src="../assets/images/Hero_Mobile_11zon.jpg">
            <img class="tablet" src="../assets/images/Hero_Tablet_11zon.jpg">

           
            <div class="hero-content">
                <div class="container">
                    <h1>Discover our line of VR Headsets</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium.
                    </p>
                    <button>View Headsets</button>
                </div>
            </div>
        </section>

</template>


<script>
export default {
  name: 'AppHero'  // multi-word name (see next error)
}
</script>