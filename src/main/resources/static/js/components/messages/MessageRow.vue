<template>
    <v-card class=my-2>
        <v-card-text primary-title>
            <i>({{ message.id }})</i>
            {{ message.text }}
        </v-card-text>
        <v-card-actions>
        <v-btn round small flat tile color="success" value="Edit" @click="edit"><v-icon left>mdi-pencil</v-icon>Edit</v-btn>
            <v-btn round small flat value="X" @click="del" ><v-icon>mdi-delete-forever</v-icon></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: ['message', 'editMessage', 'deleteMessage', 'messages'],
        methods: {
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.deleteMessage(this.message)
            }
        }
    }
</script>

<style>
</style>