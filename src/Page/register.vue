<template>
  <div class="register">
    <div class="register_from">
      <div class="tip">
        <img src="/imgs/logo-mi.png" alt />
        <h1>注册小米帐号</h1>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="width:500px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (!(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(value)) {
          callback(new Error("请输入邮箱的正确格式"));
        } else {
            callback();
        }
      }, 1000);
    };
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        email: ""
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        checkPass: [{ validator: validatePass, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
        this.axios
        .post("/user/register",this.ruleForm)
        .then(data => {
          this.$message.success("注册成功");
          this.$router.push('/login')
        });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.register {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  padding-top: 100px;
  box-sizing: border-box;
  & > .register_from {
    width: 855px;
    background-color: #fff;
    margin: 0 auto;
    .tip {
      img {
        display: block;
        width: 49px;
        height: 49px;
        margin: 0 auto;
      }
      h1{
          font-weight: normal;
          text-align: center;
          padding: 10px 0;
      }
    }
    .demo-ruleForm{
        margin: 0 auto;
        padding: 20px 0;
    }
  }
}
</style>