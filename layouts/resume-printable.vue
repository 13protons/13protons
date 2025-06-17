<template>
  <div class="resume-printable font-sans bg-white text-black p-8 max-w-2xl mx-auto print:p-0 print:max-w-full print:bg-white print:text-black prose prose-sm">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ResumePrintableLayout',
}
</script>

<style scoped lang="postcss">
.resume-printable {
  font-size: 0.95rem;
  line-height: 1.35;
  background: #fff;
  color: #000;
}
.resume-printable hr {
  @apply my-1 border-gray-300;
}
@media print {
  .resume-printable {
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100vw !important;
    font-size: 11pt !important;
    color: #000 !important;
    background: #fff !important;
    page-break-after: avoid;
  }
  .resume-printable * {
    color: #000 !important;
    background: #fff !important;
    box-shadow: none !important;
  }
}
</style>
