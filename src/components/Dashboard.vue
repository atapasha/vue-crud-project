 
  
 
     
 

<!-- 
    <a-layout>
        <a-layout-header class="header">
          <div class="logo" />
          <a-menu
            v-model:selectedKeys="selectedKeys1"
            theme="dark"
            mode="horizontal"
            :style="{ lineHeight: '64px' }"
          >
       
            <a-menu-item key="1">
                <router-link  :to="{name:'AddProject'}">Add New Projects</router-link>
 
            </a-menu-item>
           </a-menu>
        </a-layout-header>
        <a-layout-content  style="padding: 0 50px"    > 
           <div :v-bind="timee"  >{{ this.d }} </div>
          <div :v-bind="title"  >{{ this.title }} </div>
          <a-breadcrumb       >

          
            <a-breadcrumb-item  >
                <router-link :to="{ path: '/' }">Dashboard</router-link><br>

            </a-breadcrumb-item>
            <a-breadcrumb-item >
                <router-link :to="{ path: '/todo' }">Todo</router-link><br>

            </a-breadcrumb-item>
             <a-breadcrumb-item>
                <router-link :to="{ path: '/weather' }">Weather</router-link><br>

             </a-breadcrumb-item>
             <a-breadcrumb-item>
                <router-link :to="{ path: '/profile' }">Profile</router-link>

             </a-breadcrumb-item>
          </a-breadcrumb>
         
        </a-layout-content>
   
      </a-layout>
  -->





  <template>
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
 
        <Navbar/>
         </a-menu>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-sub-menu key="sub1">
                 <a-menu-item key="1">
                <router-link :to="{ path: '/' }">Dashboard</router-link><br>

              </a-menu-item>
              <a-menu-item key="2">
                <router-link :to="{ path: '/todo' }">Todo</router-link><br>

              </a-menu-item>
            
              <a-menu-item key="3">                <router-link :to="{ path: '/weather' }">Weather</router-link><br>
              </a-menu-item>
            
              <a-menu-item key="4">                <router-link :to="{ path: '/weather' }">                <router-link :to="{ path: '/profile' }">Profile</router-link>
              </router-link><br>
              </a-menu-item>
             </a-sub-menu>
        
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb  style="center margin: 16px 20px">
              <div :v-bind="timee"  >{{ this.d }} </div>   <br/>
              <br/>
              <br/>
              <br/>
            <div :v-bind="title"  >{{ this.title }} </div>  
              
          </a-breadcrumb>
          <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
   
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </template>









  
 

<script>

export default {
 


   data(){
    const d = new Date().toLocaleTimeString();
 const title="Wellcome User"

return{
      d,title
 }
   }
  }
 
</script>

<style scoped>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

 

.tent{
    display:column;
  justify-content: center;
  background-color: rgb(155, 205, 232);

}
 
.ant-breadcrumb{
  background-color: aqua;
  display: flex;
   justify-content:space-evenly;

  
}

.col{
  padding: 33px;
  display: flex;
  justify-content: space-between;
}
</style>