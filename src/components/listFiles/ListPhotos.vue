<template>
    <v-container>
        <v-layout row v-if="!loading && products.length !== 0">
            <v-flex offset-sm3 sm6 xs12>
                <h2 class="text--secondary mb-3">Мои Файлы</h2>
                <v-card
                        :key="i"
                        class="elevation-10 mb-2"
                        v-for="(product, i) in products"
                >
                    <v-layout row>
                        <v-flex xs5>
                            <v-img
                                    :src="product.imageSrc"
                                    class="product_img"
                                    style="margin: 22px 1px;"
                            >

                            </v-img>
                        </v-flex>
                        <v-flex xs6>
                            <v-card-text>
                                <h3 class="text--primary">{{ product.title }}</h3>
                                <p style="word-break: break-word;">{{ product.description }}</p>
                            </v-card-text>
                            <v-card-actions class="hidden-sm-and-down">
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="info"

                                >Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout v-else-if="!loading && products">
            <v-flex class="text-xs-center" xs12>
                <h1 class="text--primary">Вы еще не добавили ни одного товара</h1>
            </v-flex>
        </v-layout>
        <v-layout v-else>
            <v-flex class="text-xs-center" xs12>
                <v-progress-circular
                        :size="100"
                        :width="4"
                        color="purple"
                        indeterminate
                ></v-progress-circular>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            products () {
                return this.$store.getters.myProducts
            },
            loading () {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style >

    v-card-text {
        padding: 6px;
        width: 100%;
        word-break: break-word;
    }
    v-card-text p {
        word-break: break-all;
        font-size: smaller;
    }
    .product_img {
        background-size: contain;
        max-width: 100%;
        margin: 4px auto;
    }

    img {
        background-size: contain;
        max-width: 100%;
        margin: 4px auto;
    }


</style>
