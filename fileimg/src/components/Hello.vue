<template>
  <div class="hello">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1'

        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1'

        }, {
          label: '二级 2-2'

        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1'

        }, {
          label: '二级 3-2'

        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data.label);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
