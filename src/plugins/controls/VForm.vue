<<template>
  <form @submit.prevent="onSubmit" @keydown="errorObject.clear($event.target.name)">
      <slot></slot>
  </form>
</template>

<script>
    export default {
        name: "vForm",
        props: {
            errorObject: Object,
            isEncType: Boolean
        }
    }
</script>
