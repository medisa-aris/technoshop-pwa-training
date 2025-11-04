<template>
    <section class="newsletter" id="newsletter-section">
            <h3>Newsletter Signup</h3>
            <p>Subscribe now and don't miss a single deal!</p>
            <form>
                <input type="email" name="email" placeholder="Your email...">
                <button type="submit">Subscribe</button>
            </form>
        </section>

</template>

<script>
export default {
  name: 'EmailSubscribe'  // multi-word name (see next error)
}
</script>
