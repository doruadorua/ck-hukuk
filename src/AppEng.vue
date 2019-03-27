<template>
  <div>
    <!-- <div class="fh5co-loader"></div> -->

    <div id="page">
      <nav class="fh5co-nav" role="navigation">
        <div class="container">
          <div class="row" style="overflow: auto;">
            <div>
              <div style="float:left;" id="fh5co-logo"><a style="cursor:default;">CK Partners</a></div>
            </div>
            <div style="padding-top:3vh; float:right;">
              <img @click="goTurkish" src="src/images/turkish_flag.png" style="width:30px;cursor:pointer;">
            </div>
          </div>
        </div>
      </nav>

      <header id="fh5co-header" class="fh5co-cover" role="banner" style="background-image:url(src/images/header-bg.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
              <div class="display-t">
                <div class="display-tc animate-box" data-animate-effect="fadeIn">
                  <h1 class="baslik">Under Construction!</h1>
                  <div class="simply-countdown simply-countdown-one"></div>
                  <div class="row">
                    <form class="form-inline" id="fh5co-header-subscribe">
                      <div class="col-md-12 col-md-offset-0">
                        <transition :name="anim" mode="out-in">
                          <div class="form-group" v-if="!getSaved">
                            <vue-tel-input class="form-control" id="email"
                                            style="display: inline-flex;" 
                                            v-model="phoneNumber"
                                            @onInput="onInput"
                                            required
                                            placeholder="Leave your phone number, we will call you back."
                                            defaultCountry="DE">
                            </vue-tel-input>
                            <button class="btn btn-primary" @click.prevent="saveUser">Send</button>
                            <br>
                            <small v-if="notValid" style="color:red;float:left">Selected country and the phone number is not matched. Please check again.</small>
                          </div>
                          <p v-else style="marginBottom:8px"> We will contact you as soon as possible.<br> Thanks for your interest.  </p>
                        </transition>
                      </div>
                    </form>
                    <ul class="fh5co-social-icons">
                      <li><a href="https://www.facebook.com/CK-Hukuk-ve-Dan%C4%B1%C5%9Fmanl%C4%B1k-939011302968600/"><i class="icon-facebook-with-circle"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/ck-hukuk/about/"><i class="icon-linkedin-with-circle"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> 
    </div>  
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  data(){
    return{
      phoneNumber: '',
      isValid: '',
      country: '',
      anim: 'fade',
      notValid: '',
    }
  },
  methods: {
    onInput({number, isValid, country}){
      this.phoneNumber = number
      this.isValid = isValid
      this.country = country
    },
    saveUser(){
      if(this.isValid){
        let temp = new Date()
        let date = (temp.getDate().toString().length == 2 ? temp.getDate() : '0' + temp.getDate()) + '.' + 
                    ((temp.getMonth() + 1).toString().length == 2 ? (temp.getMonth() + 1) : '0' + (temp.getMonth() + 1)) + '.' + 
                    temp.getFullYear()
        let hour = (temp.getHours().toString().length == 2 ? temp.getHours() : '0' + temp.getHours()) + ':' +
                    (temp.getMinutes().toString().length == 2 ? temp.getMinutes() : '0' + temp.getMinutes())
        this.$http.post('kayit.json', {tarih: date, saat: hour, tel:this.phoneNumber, ulke: this.country.name})
        .then((response) => {
          console.log(response)
        })
        this.$store.commit('updateSaved', true)
      } else {
        this.notValid = true
      }

    },
    goTurkish(){
      this.$router.push('/')
    }
  },
  computed: mapGetters([
    'getSaved'
  ]),
  created(){
    this.$loadScript('../src/js/simplyCountdownEng.js')
    .then(() => {
      var d = new Date(new Date().getTime() + 800 * 120 * 120 * 200)
      simplyCountdownEng('.simply-countdown-one', {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate()
        })
    })
    .catch(() => {
      console.log("yuklenemedi")
    })
  }
}
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 0.5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition: opacity 0.5s;
    opacity: 0;
  }
  /* @keyframes fade-in {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  } */
</style>
