<template>
    <div>
        <form  action=? id="mkdir" method=post>
            <div class="form-group form-check">
                <label for=dirname>Введите название новой папки</label>
                <input class="form-control" id=dirname name=name placeholder="новая папка" type=text value="" />
            </div>
            <button class="btn btn-primary" type="submit" value="create">create</button>
        </form>

        <div id="file_drop_target" >
            Drag Files Here
            <b>or</b>
            <input multiple type="file" />
        </div>
    </div>


</template>

<script>
    export default {
        name: "UploadFiles"
    }
</script>

<style scoped>

</style>
