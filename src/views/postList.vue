<template>
  <div class="list">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格 -->
    <el-table border :data="postList" style="width: 100%;margin-top:20px">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="title" label="标题" width="360"></el-table-column>
      <el-table-column prop="create_date" label="时间" width="280"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="user.nickname" label="作者" width="120"></el-table-column>
      <el-table-column label="操作" width="230">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="分享" placement="top">
            <el-button type="success " icon="el-icon-share"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="warning " icon="el-icon-delete"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getPostList } from '@/api/posts'
export default {
  data () {
    return {
      postList: [],
      pageIndex: 1,
      pageSize: 5
    }
  },
  methods: {
    edit (row) {
      console.log(row)
    }
  },
  async mounted () {
    let res = await getPostList({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    })
    console.log(res)
    this.postList = res.data.data
  }
}
</script>

<style>
</style>
