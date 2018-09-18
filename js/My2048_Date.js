/**
 * Created by 景韬 on 2016/5/16.
 */

// Date && Function && Define
var canvas = document.getElementById("myCanvas") ;
var context = canvas.getContext("2d") ;
var backCanvas = document.getElementById("background") ;
var backContext = backCanvas.getContext("2d") ;

var _size = 525 ; // 总背景边长
var path = 20 ; // 格子间通道的长度
var _cube_size = (_size-path*5)/4 ; // 格子边长=106.25

    // 中间数字的格式
context.textBaseline= "middle" ;
context.textAlign = "center" ;
context.font = "bold 40px 微软雅黑" ;

    // XY_ij 的类
var XY_ij = function(x,y) {this.x=x||0;this.y=y||0;}; // ||缺省值
    // rgb的类
var rgb =  function(r,g,b){this.r=r;this.g=g;this.b=b;} ;
    // Cube 的类
var Cube = function(value,i,j){
    this.judge= false ;
    // 出现时渐放效果
    this.largen = false ;
    this.largen_factor = 0.5 ;
    // 相加时放大/缩小效果
    this.add = false ;
    this.have_add = false ;
    this.add_factor = 1 ;


    this.i=i ;
    this.j=j ;
    this.value = value  ;

    this.draw = function(){
        this.color = cube_color(this.value) ;
        if ( this.judge ) {
            // 方格颜色
                var tmp = new CVIGraph() ;
                tmp.gFillColor(cvi.c3b(this.color.r,this.color.g,this.color.b)) ;
                tmp.gLineStyle(cvi.c3b(this.color.r,this.color.g,this.color.b),1) ;
            // 数字大小
//                if (this.value<16) context.font = "bold 55px 微软雅黑" ;
//                else if (this.value<128) context.font = "bold 55px 微软雅黑" ;
//                else if (this.value<1024) context.font = "bold 50px 微软雅黑" ;
//                else context.font = "bold 40px 微软雅黑" ;
            // 数字颜色
                if(this.value<8) context.fillStyle = "rgba(124,115,106,1)" ;
                else context.fillStyle = "rgba(255,247,235,1)" ;

            if ( !this.largen && !this.add ){
                // Draw方格
                tmp.rect(cvi.rect(cube_location(this.i,this.j).x,
                                  cube_location(this.i,this.j).y,
                                  _cube_size,_cube_size)) ;
                tmp.draw(context) ;
                // Draw数字
                context.fillText(value_string(this.value),
                                  cube_location(this.i,this.j).x+_cube_size/2,
                                  cube_location(this.i,this.j).y+_cube_size/2 );
            }
            else if ( this.largen ){
                context.save() ;
                context.translate(cube_location(this.i,this.j).x+_cube_size/2,
                                   cube_location(this.i,this.j).y+_cube_size/2) ;
                context.scale(this.largen_factor,this.largen_factor) ;

                // Draw方格
                tmp.rect(cvi.rect(-1*(_cube_size/2*this.largen_factor),
                                  -1*(_cube_size/2*this.largen_factor),
                                  _cube_size*this.largen_factor,_cube_size*this.largen_factor)) ;
                tmp.draw(context) ;
                // Draw数字

                context.fillText(value_string(this.value),0,0) ;

                context.restore() ;
                this.largen_factor += 0.05 ;
                if ( this.largen_factor>1 ) {
                    this.largen_factor = 0.5 ;
                    this.largen = false ;
                }
            }
            else if ( this.add ){
                context.save() ;
                context.translate(cube_location(this.i,this.j).x+_cube_size/2,
                    cube_location(this.i,this.j).y+_cube_size/2) ;
                context.scale(this.add_factor,this.add_factor) ;

                // Draw方格
                tmp.rect(cvi.rect(-1*(_cube_size/2*this.add_factor),
                    -1*(_cube_size/2*this.add_factor),
                    _cube_size*this.add_factor,_cube_size*this.add_factor)) ;
                tmp.draw(context) ;
                // Draw数字
                context.fillText(value_string(this.value),0,0) ;
                context.restore() ;

                if ( !this.have_add && this.add_factor<=1.1 ) this.add_factor += 0.01 ;
                else {
                    this.have_add = true ;
                    this.add_factor -= 0.01 ;
                    if ( this.add_factor==1 ) {
                        this.add = false ;
                        this.have_add = false ;
                    }
                }

            }


        }

    }
};
    // 获得相关数字颜色的函数
function cube_color(value) {
    var res ;
    switch (value) {
        case 2 : res = new rgb(238,228,218) ; break ;
        case 4 : res = new rgb(236,224,200) ; break ;
        case 8 : res = new rgb(242,177,121) ; break ;
        case 16 : res = new rgb(245,149,99) ; break ;
        case 32 : res = new rgb(245,124,95) ; break ;
        case 64 : res = new rgb(246,93,59) ; break ;
        case 128 : res = new rgb(237,206,113) ; break ;
        case 256 : res = new rgb(237,204,97) ; break ;
        case 512 : res = new rgb(236,200,80) ; break ;
        case 1024 : res = new rgb(237,197,63) ; break ;
        case 2048 : res = new rgb(238,194,46) ; break ;
        case 4096 : res = new rgb(0,88,37) ; break ;
    }
    return res ;
}
    // 随机产生2或4的函数
function creat2_4(){
    var num = Math.random()*100 ;
    return (num<90? 2:4) ; // 90%->2 and 10%->4
}
    // 随机产生1-4位置的函数
function creat_location() {
    var res ;
    var x = Math.ceil(Math.random()*4) , y = Math.ceil(Math.random()*4) ;
    res = new XY_ij(x,y) ;
    return res ;
}
    //  获得每个方格左上顶点的位置函数
function cube_location(i,j){
    var res ;
    var x = (1200-_size)/2 + path*i + _cube_size*(i-1) ;
    var y = (600-_size)/2 + path*j + _cube_size*(j-1) ;
    res = new XY_ij(x,y) ;

    return res ;
}
    // 获得数字对应文字的函数
function value_string(value){
    var res ;
    switch (value) {
        case 2 : res = "子鼠" ; break ;
        case 4 : res = "丑牛" ; break ;
        case 8 : res = "寅虎" ; break ;
        case 16 : res = "卯兔" ; break ;
        case 32 : res = "辰龙" ; break ;
        case 64 : res = "巳蛇" ; break ;
        case 128 : res = "午马" ; break ;
        case 256 : res = "未羊" ; break ;
        case 512 : res = "申猴" ; break ;
        case 1024 : res = "酉鸡" ; break ;
        case 2048 : res = "戌狗" ; break ;
        case 4096 : res = "中猪" ; break ;
    }
    return res ;
}


    // 键盘响应
var Left = false ,Right = false  ,Up = false , Down = false ;
document.addEventListener("keydown",function(e){
    if (e.keyCode==37|| e.keyCode==65) Left = true ; // 37←    65a
    else if (e.keyCode==38|| e.keyCode==87) Up = true ; // 38↑  87w
    else if (e.keyCode==39|| e.keyCode==68) Right= true ; // 39→ 68d
    else if (e.keyCode==40|| e.keyCode==83) Down= true ;  // 40↓ 83s
},false) ;
document.addEventListener("keyup",function(){
    if ( Left ){moveLeft();Left=false;}
    else if (Up){moveUp();Up=false;}
    else if (Right){moveRight();Right=false;}
    else if (Down){moveDown();Down=false;}
},false) ;

    // 下上左右响应函数(下->右 上->左)
function moveDown(){
    var if_move = false ;
    for ( var i=1 ; i<=4 ; i++ ) {
        for ( var j=4 ; j>=1 ; j-- ){
            if ( cube[i][j].judge == true ){ // 本身为True
                for ( var tmp=j-1 ; tmp>=1 ; tmp-- ) // 找最近的True
                    if ( cube[i][tmp].judge==true ) break ;
                if ( tmp!=0 ){ // 范围中含True
                    if ( cube[i][tmp].value==cube[i][j].value ){ // 该True的值相同
                        cube[i][tmp].judge = false ;
                        cube_number -- ;
                        cube[i][j].value *= 2 ;
                        cube[i][j].add = true ;
                        if_move = true ;
                    }
                    else { // 该True的值不同
                        if ( tmp!=j-1 ) {
                            cube[i][tmp].judge = false ;
                            cube[i][j-1].judge = true ;
                            cube[i][j-1].value = cube[i][tmp].value ;
                            if_move = true ;
                        }
                    }
                }
                else break ; // 范围中不含True
            }
            else if ( cube[i][j].judge == false ){ // 本身为false
                for ( var temp=j-1 ; temp>=1 ; temp-- ) // 找最近的True
                    if ( cube[i][temp].judge==true ) break ;
                if ( temp!=0 ){ // 范围中含True
                    cube[i][temp].judge = false ;
                    cube[i][j].judge = true ;
                    cube[i][j].value = cube[i][temp].value ;
                    if_move = true ;
                    // 当作本身为True的情况处理
                    for ( var temp_=j-1 ; temp_>=1 ; temp_-- ) // 找最近的True
                        if ( cube[i][temp_].judge==true ) break ;
                    if ( temp_!=0 ){ // 范围中含True
                        if ( cube[i][temp_].value==cube[i][j].value ){ // 该True的值相同
                            cube[i][temp_].judge = false ;
                            cube_number -- ;
                            cube[i][j].value *= 2 ;
                            cube[i][j].add = true ;
                        }
                        else { // 该True的值不同
                            if ( temp_!=j-1 ){
                                cube[i][temp_].judge = false ;
                                cube[i][j-1].judge = true ;
                                cube[i][j-1].value = cube[i][temp_].value ;
                            }
                        }
                    }
                    else break ; // 范围中不含True
                }
                else break ; // 范围中不含True
            }
        }
    }
    while ( if_move ){
        var x=creat_location().x , y=creat_location().y ;
        if ( cube_number == 16 ) {
            var _continue = false ;
            for ( var i_tmp=1 ; i_tmp<=4 ; i_tmp++ )
                for ( var j_tmp=1 ; j_tmp<=4 ; j_tmp++ )
                    if ( cube[i_tmp][j_tmp].value==cube[i_tmp+1][j_tmp].value||
                         cube[i_tmp][j_tmp].value==cube[i_tmp-1][j_tmp].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp][j_tmp+1].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp][j_tmp-1].value
                      )
                        _continue = true ;
            if ( !_continue ) game_over = true ;

            break ;
        }
        else if ( !cube[x][y].judge ){
            cube[x][y].largen = true ;
            cube[x][y].value = creat2_4() ;
            cube[x][y].judge = true ;
            cube_number ++ ;
            break ;
        }
    }
}

function moveUp(){
    var if_move = false ;
    for ( var i=1 ; i<=4 ; i++ ) {
        for ( var j=1 ; j<=4 ; j++ ){
            if ( cube[i][j].judge == true ){ // 本身为True
                for ( var tmp=j+1 ; tmp<=4 ; tmp++ ) // 找最近的True
                    if ( cube[i][tmp].judge==true ) break ;
                if ( tmp!=5 ){ // 范围中含True
                    if ( cube[i][tmp].value==cube[i][j].value ){ // 该True的值相同
                        cube[i][tmp].judge = false ;
                        cube_number -- ;
                        cube[i][j].value *= 2 ;
                        cube[i][j].add = true ;
                        if_move = true ;
                    }
                    else { // 该True的值不同
                        if ( tmp!=j+1 ) {
                            cube[i][tmp].judge = false ;
                            cube[i][j+1].judge = true ;
                            cube[i][j+1].value = cube[i][tmp].value ;
                            if_move = true ;
                        }
                    }
                }
                else break ; // 范围中不含True
            }
            else if ( cube[i][j].judge == false ){ // 本身为false
                for ( var temp=j+1 ; temp<=4 ; temp++ ) // 找最近的True
                    if ( cube[i][temp].judge==true ) break ;
                if ( temp!=5 ){ // 范围中含True

                    cube[i][j].judge = true ;
                    cube[i][j].value = cube[i][temp].value ;
                    cube[i][temp].judge = false ;
                    if_move = true ;
                    // 当作本身为True的情况处理
                    for ( var temp_=j+1 ; temp_<=4 ; temp_++ ) // 找最近的True
                        if ( cube[i][temp_].judge==true ) break ;
                    if ( temp_!=5 ){ // 范围中含True
                        if ( cube[i][temp_].value==cube[i][j].value ){ // 该True的值相同
                            cube[i][temp_].judge = false ;
                            cube_number -- ;
                            cube[i][j].value *= 2 ;
                            cube[i][j].add = true ;
                        }
                        else { // 该True的值不同
                            if (temp_!=j+1){
                                cube[i][temp_].judge = false ;
                                cube[i][j+1].judge = true ;
                                cube[i][j+1].value = cube[i][temp_].value ;
                            }
                        }
                    }
                    else break ; // 范围中不含True
                }
                else break ; // 范围中不含True
            }
        }
    }
    while(if_move){
        var x=creat_location().x , y=creat_location().y ;
        if ( cube_number == 16 ) {
            var _continue = false ;
            for ( var i_tmp=1 ; i_tmp<=4 ; i_tmp++ )
                for ( var j_tmp=1 ; j_tmp<=4 ; j_tmp++ )
                    if ( cube[i_tmp][j_tmp].value==cube[i_tmp+1][j_tmp].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp-1][j_tmp].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp][j_tmp+1].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp][j_tmp-1].value
                    )
                        _continue = true ;
            if ( !_continue ) game_over = true ;

            break ;
        }
        else if ( !cube[x][y].judge ){
            cube[x][y].largen = true ;
            cube[x][y].value = creat2_4() ;
            cube[x][y].judge = true ;
            cube_number ++ ;
            break ;
        }
    }
}

function moveRight(){
    var if_move = false ;
    for ( var j=1 ; j<=4 ; j++ ) {
        for ( var i=4 ; i>=1 ; i-- ){
            if ( cube[i][j].judge == true ){ // 本身为True
                for ( var tmp=i-1 ; tmp>=1 ; tmp-- ) // 找最近的True
                    if ( cube[tmp][j].judge==true ) break ;
                if ( tmp!=0 ){ // 范围中含True
                    if ( cube[tmp][j].value==cube[i][j].value ){ // 该True的值相同
                        cube[tmp][j].judge = false ;
                        cube_number -- ;
                        cube[i][j].value *= 2 ;
                        cube[i][j].add = true ;
                        if_move = true ;
                    }
                    else { // 该True的值不同
                        if ( tmp!=i-1 ) {
                            cube[tmp][j].judge = false ;
                            cube[i-1][j].judge = true ;
                            cube[i-1][j].value = cube[tmp][j].value ;
                            if_move = true ;
                        }
                    }
                }
                else break ; // 范围中不含True
            }
            else if ( cube[i][j].judge == false ){ // 本身为false
                for ( var temp=i-1 ; temp>=1 ; temp-- ) // 找最近的True
                    if ( cube[temp][j].judge==true ) break ;
                if ( temp!=0 ){ // 范围中含True

                    cube[i][j].judge = true ;
                    cube[i][j].value = cube[temp][j].value ;
                    cube[temp][j].judge = false ;
                    if_move = true ;
                    // 当作本身为True的情况处理
                    for ( var temp_=i-1 ; temp_>=1 ; temp_-- ) // 找最近的True
                        if ( cube[temp_][j].judge==true ) break ;
                    if ( temp_!=0 ){ // 范围中含True
                        if ( cube[temp_][j].value==cube[i][j].value ){ // 该True的值相同
                            cube[temp_][j].judge = false ;
                            cube_number -- ;
                            cube[i][j].value *= 2 ;
                            cube[i][j].add = true ;
                        }
                        else { // 该True的值不同
                            if ( temp_!=j ){
                                cube[temp_][j].judge = false ;
                                cube[i-1][j].judge = true ;
                                cube[i-1][j].value = cube[temp_][j].value ;
                            }
                        }
                    }
                    else break ; // 范围中不含True
                }
                else break ; // 范围中不含True
            }
        }
    }
    while(if_move){
        var x=creat_location().x , y=creat_location().y ;
        if ( cube_number == 16 ) {
            var _continue = false ;
            for ( var i_tmp=1 ; i_tmp<=4 ; i_tmp++ )
                for ( var j_tmp=1 ; j_tmp<=4 ; j_tmp++ )
                    if ( cube[i_tmp][j_tmp].value==cube[i_tmp+1][j_tmp].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp-1][j_tmp].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp][j_tmp+1].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp][j_tmp-1].value
                    )
                        _continue = true ;
            if ( !_continue ) game_over = true ;

            break ;
        }
        else if ( !cube[x][y].judge ){
            cube[x][y].largen = true ;
            cube[x][y].value = creat2_4() ;
            cube[x][y].judge = true ;
            cube_number ++ ;
            break ;
        }
    }
}

function moveLeft(){
    var if_move = false ;
    for ( var j=1 ; j<=4 ; j++ ) {
        for ( var i=1 ; i<=4 ; i++ ){
            if ( cube[i][j].judge == true ){ // 本身为True
                for ( var tmp=i+1 ; tmp<=4 ; tmp++ ) // 找最近的True
                    if ( cube[tmp][j].judge==true ) break ;
                if ( tmp!=5 ){ // 范围中含True
                    if ( cube[tmp][j].value==cube[i][j].value ){ // 该True的值相同
                        cube[tmp][j].judge = false ;
                        cube_number -- ;
                        cube[i][j].value *= 2 ;
                        cube[i][j].add = true ;
                        if_move = true ;
                    }
                    else { // 该True的值不同
                        if ( tmp!=i+1 ) {
                            cube[tmp][j].judge = false ;
                            cube[i+1][j].judge = true ;
                            cube[i+1][j].value = cube[tmp][j].value ;
                            if_move = true ;
                        }
                    }
                }
                else break ; // 范围中不含True
            }
            else if ( cube[i][j].judge == false ){ // 本身为false
                for ( var temp=i+1 ; temp<=4 ; temp++ ) // 找最近的True
                    if ( cube[temp][j].judge==true ) break ;
                if ( temp!=5 ){ // 范围中含True

                    cube[i][j].judge = true ;
                    cube[i][j].value = cube[temp][j].value ;
                    cube[temp][j].judge = false ;
                    if_move = true ;
                    // 当作本身为True的情况处理
                    for ( var temp_=i+1 ; temp_<=4 ; temp_++ ) // 找最近的True
                        if ( cube[temp_][j].judge==true ) break ;
                    if ( temp_!=5 ){ // 范围中含True
                        if ( cube[temp_][j].value==cube[i][j].value ){ // 该True的值相同
                            cube[temp_][j].judge = false ;
                            cube_number -- ;
                            cube[i][j].value *= 2 ;
                            cube[i][j].add = true ;
                        }
                        else { // 该True的值不同
                            if ( temp_!=i+1 ){
                                cube[temp_][j].judge = false ;
                                cube[i+1][j].judge = true ;
                                cube[i+1][j].value = cube[temp_][j].value ;
                            }
                        }
                    }
                    else break ; // 范围中不含True
                }
                else break ; // 范围中不含True
            }
        }
    }
    while(if_move){
        var x=creat_location().x , y=creat_location().y ;
        if ( cube_number == 16 ) {
            var _continue = false ;
            for ( var i_tmp=1 ; i_tmp<=4 ; i_tmp++ )
                for ( var j_tmp=1 ; j_tmp<=4 ; j_tmp++ )
                    if ( cube[i_tmp][j_tmp].value==cube[i_tmp+1][j_tmp].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp-1][j_tmp].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp][j_tmp+1].value||
                        cube[i_tmp][j_tmp].value==cube[i_tmp][j_tmp-1].value
                    )
                        _continue = true ;
            if ( !_continue ) game_over = true ;

            break ;
        }
        else if ( !cube[x][y].judge ){
            cube[x][y].largen = true ;
            cube[x][y].value = creat2_4() ;
            cube[x][y].judge = true ;
            cube_number ++ ;
            break ;
        }
    }
}

