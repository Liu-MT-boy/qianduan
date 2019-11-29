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
      <el-table-column prop="title" label="标题" width="470"></el-table-column>
      <el-table-column prop="create_date" label="时间" width="200"></el-table-column>
      <el-table-column prop="type" label="类型" width="50"></el-table-column>
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
    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { getPostList } from '@/api/posts'
export default {
  data () {
    return {
      postList: [],
      pageIndex: 1,
      pageSize: 2
    }
  },
  methods: {
    edit (row) {
      console.log(row)
    },
    // 切换每页显示记录数时触发
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      // 重置cageSize
      this.pageSize = val
      this.init()
    },
    // 切换当前页码时触发
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pageIndex = val
      this.init()
    },
    // 数据初始化
    async init () {
      let res = await getPostList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      })
      console.log(res)
      this.postList = res.data.data
      this.total = res.data.total
    }
  },
  async mounted () {
    this.init()
  }
}
</script>

<style>
</style>
