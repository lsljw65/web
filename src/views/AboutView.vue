<template>
  <div class="about">
    <h2 class="about-title">DAILY COFFEE</h2>
    <p>언제 어디서나, 부담스럽지 않은 가격과 대용량으로<br>
        모든 사람들에게 사랑받는 메가MGC커피 입니다.
    </p>
    <div class="about-container">
      <div class="box">
        <h3>BIG</h3>
        <h4>크다</h4>
        <p>
          기본 24oz(680ml)의<br>
          많은 양의 빅사이즈 커피
        </p>
      </div>
      <div class="box">
        <h3>DELICIOUS</h3>
        <h4>맛있다</h4>
        <p>
          100% 아라비카 프리미엄 원두를<br>
          국내 로스팅하여 항상 신선한 원두를 가맹점에 공급
        </p>
      </div>
      <div class="box">
        <h3>RATIONAL</h3>
        <h4>합리적</h4>
        <p>
          유통과정을 최소화하여 최대한<br>
          저렴하고 합리적인 가격에 제공
        </p>
      </div>
      <div class="box">
        <h3>DIFFERENTIATION</h3>
        <h4>차별화</h4>
        <p>
          재미있는 비주얼과 콘셉트,<br>
          시즌마다 출시되는 트렌디한 음료
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default{

}
</script>
<style>
  .about{
    width:100%;
    max-width:1280px;
    border-top:1px dashed black;
    border-bottom:1px dashed black;
    padding:50px 0;
    margin:auto;
  }
  .about-title{
    position:relative;
    font-size:3rem;
    text-align:center;
    margin:50px 0;
  }
  .about-title::before{
    content:"하루에 한 잔! 매일 즐기는 데일리 커피";
    position:absolute;
    left:50%;
    top:0;
    font-size:1rem;
    transform:translate(-50%,-100%)
  }
  .about-container{
    width:100%;
    max-width:1280px;
    display:flex;
    justify-content: space-between;
    margin:50px auto;
  }
  .box{
    width:20%;
    border:1px solid black;
    height:200px;
    border:1px solid #ddd;
    display:flex;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .box h3{
    color:darkorange;
    margin:10px 0;
  }
  .box h4{
    margin:10px 0;
  }
</style>
