/**
 * Created by 景韬 0.0 on 2016/5/23.
 */
// 背景
    // var _size = 525 ; // 总背景边长
var back = new CVIGraph() ;
back.gLineStyle(cvi.c3b(184,175,158),1) ; // 总背景颜色
back.gFillColor(cvi.c3b(184,175,158)) ;  // 总背景颜色
back.roundRect(cvi.rect((1200-_size)/2,(600-_size)/2,_size,_size),20) ; // 总背景
back.draw(backContext) ;
var back_ = new CVIGraph() ;
back_.gLineStyle(cvi.c3b(0,0,0),1) ; // 总背景外面的矩形外框
back_.roundRect(cvi.rect((1200-_size)/2-5,(600-_size)/2-5,_size+10,_size+10),5) ;
back_.draw(backContext) ;
var back_cube = new CVIGraph() ; // 格子背景
back_cube.gLineStyle(cvi.c3b(204,192,178),1) ; // 格子背景颜色
back_cube.gFillColor(cvi.c3b(204,192,178)) ; // 格子背景颜色
    // var path = 20 ; // 格子间通道的长度
    // var _cube_size = (_size-path*5)/4 ; // 格子边长
for ( var i=1 ; i<=4 ; i++ ) {
    for ( var j=1 ; j<=4 ; j++ ){
        back_cube.rect(cvi.rect(cube_location(i,j).x, cube_location(i,j).y, _cube_size,_cube_size)) ;
        back_cube.draw(backContext) ;
    }
}

// 初始化界面
var cube = new Array(7) ;
for ( i=0 ; i<=5 ; i++ ) {
    cube[i] = new Array(7) ;
    for ( j=0 ; j<=5 ; j++ )
        cube[i][j] = new Cube(0,i,j) ;
}
    //两个随机格子
for ( i=1 ; i<=2 ;) {
    var x = creat_location().x , y = creat_location().y ;
    if ( cube[x][y].judge==true ) continue ;
    cube[x][y].largen = true ;
    cube[x][y].judge = true ;
    cube[x][y].value = creat2_4() ;
    cube[x][y].draw() ;
    i++ ;
}

var cube_number = 2 ; // 格子数目
var game_over = false ;

setInterval(function(){
    context.clearRect(0,0,1200,600) ;
    for ( var i=1 ; i<=4 ; i++ ){
        for ( var j=1 ; j<=4 ; j++ ){
                cube[i][j].draw() ;
        }
    }
},1000/60) ;



