<template>
  <div class="addpost">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章发布</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card" style="margin-top:30px">
      <el-form :model="postForm" label-width="40px">
        <el-form-item label="标题">
          <el-input v-model="postForm.title"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-radio-group v-model="postForm.type">
            <el-radio :label="1">文章</el-radio>
            <el-radio :label="2">视频</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-button type="primary" @click="pulishPost">发布文章</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postForm: {
        title: '',
        content: '',
        categories: [],
        cover: [],
        type: 1
      }
    }
  },
  methods: {
    pulishPost () {
      console.log(this.postForm)
    }
  }
}
</script>

<style>
</style>
