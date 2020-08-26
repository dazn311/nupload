import Vue from 'vue'
import LongPress from 'vue-directive-long-press'

Vue.directive('long-press', LongPress);

// exempale template
//
// <template>
// <button
// v-long-press="300"
// @long-press-start="onLongPressStart"
// @long-press-stop="onLongPressStop">
//     Click and Hold for 300ms</button>
// </template>
//
// import LongPress from 'vue-directive-long-press'
//
// export default {
//     directives: {
//         'long-press': LongPress
//     },
//     methods: {
//         onLongPressStart () {
//             // triggers after 300ms of mousedown
//         },
//         onLongPressStop () {
//             // triggers on mouseup of document
//         }
//     }
// }
