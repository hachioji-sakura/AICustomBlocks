enum datasetType {
    //% block="過去データ"
    historical = 0,
    //% block="現在データ"
    current = 1,
    //% block="リアルタイムデータ"
    live = 2
}

enum ML {
    //% block="教師あり学習"
    supervised,
    //% block="教師なし学習"
    unsupervised,
    //% block="半教師あり学習"
    semiSupervised,
    //% block="強化学習"
    reinforcement
}

//% color="#8c800b" block="入力"
namespace Input{

    //% block="位置1の画像データ"
    export function location1PictureData_MT() {
        blocks.place(STONE, world(96, 61, -397));
    }

    //% block="位置1の画像データ"
    export function location1PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="位置2の画像データ"
    export function location2PictureData_MT() {
        blocks.place(STONE, world(96, 61, -396));
    }

    //% block="位置2の画像データ"
    export function location2PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="位置3の画像データ"
    export function location3PictureData_MT() {
        blocks.place(STONE, world(96, 61, -395));
    }

    //% block="位置3の画像データ"
    export function location3PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="ライブセンサー1のデータ"
    export function sensor1_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="ライブセンサー2のデータ"
    export function sensor2_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="ライブセンサー3のデータ"
    export function sensor3_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="ライブセンサー4のデータ"
    export function sensor4_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="トラップカメラ1のデータ"
    export function trap1_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="トラップカメラ2のデータ"
    export function trap2_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="トラップカメラ3のデータ"
    export function trap3_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="位置1の衛星データを取得"
    export function beacon1_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="位置2の衛星データを取得"
    export function beacon2_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="位置3の衛星データを取得"
    export function beacon3_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="位置4の衛星データを取得"
    export function beacon4_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="位置5の衛星データを取得"
    export function beacon5_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="衛星を制御"
    //% handlerStatement=1
    export function runSatelite_SF(handler: () => void) {
            let i = 0
            for(i = 0; i<3; i++){
            handler();
        }
    }

    //% block="位置1の水質データ"
    export function waterData1_WQ() {
        agent.move(FORWARD, 2)
    }

    //% block="位置2の水質データ"
    export function waterData2_WQ() {
        agent.move(FORWARD, 2)
    }

    //% block="位置3の水質データ"
    export function waterData3_WQ() {
        agent.move(FORWARD, 2)
    }
}

//% color="#4C97FF" block="データセット"
namespace Datasets{

    //% block="データセットを作成"
    //% handlerStatement=1
    export function setOfData_MT(handler: () => void) {
        blocks.place(STONE, world(96, 61, -398));
        handler();
    }

    //% block="データセットを作成"
    //% handlerStatement=1
    export function setOfData_MTB(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="%type|データセットを作成"
    //% handlerStatement=1
    export function setOfData_OO(type: datasetType, handler: () => void) {
        if(type == 2){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="%type|データセットを作成"
    //% handlerStatement=1
    export function setOfData_SF(type: datasetType, handler: () => void){
        if(type == 1){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="データを転送"
    export function transferData(){
        agent.move(UP, 6)
    }

    //% block="%type|データセットを作成"
    //% handlerStatement=1
    export function setOfData_PR(type: datasetType, handler: () => void) {
        if(type == 0){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="%type|データセットを作成"
    //% handlerStatement=1
    export function setOfData_WQ(type: datasetType, handler: () => void) {
        if(type == 1){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="パターンを抽出"
    export function extractPatterns_PR() {
        agent.move(LEFT, 4)
    }

    //%block="現在データセット"
    export function currentData():number{
        return 0
    }

    //%block="過去データセット"
    export function historicalData():number{
        return 0
    }

    //%block="ライブデータセット"
    export function liveData():number{
        let i = 2
        return i
    }

    //% block="データセットを入力"
    export function input_MT() {
    blocks.place(STONE, world(110, 61, -397));
    }

    //% block="データセットを入力"
    export function input_MTB() {
    agent.move(FORWARD, 2)
    }

    //% block="データセットを入力"
    export function input_PR() {
    agent.move(RIGHT, 2)
    }

    //% block="データセットを入力"
    export function input_SF() {
    agent.move(RIGHT, 2)
    }

    //% block="%type|データセットを入力"
    export function input_OO(type: datasetType){
        if(type == 2){
           agent.move(FORWARD, 3)
        }
    }

    //% block="%type0|データセットを%type1|と比較"
    //% handlerStatement=1
    export function compare_PR(type0: datasetType, type1: datasetType) {
        if(type0==1 && type1==0){
            agent.move(FORWARD, 2)
        }
    }

    //% block="%type0|データセットを%type1|と比較"
    //% handlerStatement=1
    export function compare_SF(type0: datasetType, type1: datasetType) {
        if(type0==1 && type1==0){
            agent.move(FORWARD, 2)
        }
    }

    //% block="%type|データセットを入力"
    export function input_WQ(type: datasetType){
        if(type == 1){
           agent.move(FORWARD, 3)
        }
    }

}

//% color="#8332A8"
namespace AI {

    //% block="教師なし機械学習"
    //% handlerStatement=1
    export function ml_MT(handler: () => void) {
        blocks.place(STONE, world(110, 61, -398));
        handler();
    }

    //% block="教師なし機械学習"
    //% handlerStatement=1
    export function ml_MTB(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="半教師あり機械学習"
    //% handlerStatement=1
    export function ml_SF(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="半教師あり機械学習"
    //% handlerStatement=1
    export function ml_PR(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="教師あり機械学習"
    //% handlerStatement=1
    export function ml_WQ(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="水質データを解析"
    export function analyze_WQ(){
        agent.move(RIGHT, 2)
    }
    
    //% block="データを解析"
    export function analyze_MT(){
        blocks.place(STONE, world(110, 61, -396));
    }

    //% block="データを解析"
    export function analyze_MTB(){
        agent.move(RIGHT, 3)
    }

    //% block="機械学習"
    //% handlerStatement=1
    export function ml_OO(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="自律ナビゲーションアルゴリズム"
    //% handlerStatement=1
    export function ml_OO2(handler: () => void) {
        agent.move(DOWN, 5)
        handler();
    }

    //% block="地形データを解析"
    export function analyze_OO(){
        agent.move(LEFT, 1)
    }

    //% block="ルートを生成"
    export function genRoutes_OO(){
        agent.move(RIGHT, 2)
    }

    //% block="パターンデータを解析"
    export function analyze_PR(){
        agent.move(LEFT, 3)
    }

    //% block="予測分析を実行"
    export function analyze_SF(){
        agent.move(LEFT, 3)
    }

}

//% color="#2d854e" block="出力"
namespace Output {

    //% block="エージェントがセンサー1に到達"
    export function reach1_OO() {
        agent.move(DOWN, 5)
    }

    //% block="エージェントがセンサー2に到達"
    export function reach2_OO() {
        agent.move(FORWARD, 24)
        agent.move(RIGHT, 7)
        agent.move(DOWN, 12)

        agent.teleport(world(679, 61, 96), 180)
    }

    //% block="エージェントがセンサー3に到達"
    export function reach3_OO() {
        agent.move(DOWN, 5)
    }

    //% block="エージェントがセンサー4に到達"
    export function reach4_OO() {
        agent.move(RIGHT, 32)
        agent.move(DOWN, 12)
        agent.move(FORWARD, 4)

        agent.teleport(world(679, 61, 96), 180)
    }

    //% block="位置を表示"
    export function showLocations_MT(){
        blocks.place(STONE, world(110, 61, -395));
    }

    //% block="位置を表示"
    export function showLocations_MTB(){
        agent.move(BACK, 1)
    }

    //% block="オセロットを発見"
    export function locateOcelots_PR(){
        agent.move(RIGHT, 4)
    }

    //% block="最適な農業地を発見"
    export function locateFarm_SF(){
        agent.move(RIGHT, 4)
    }

    //% block="汚染源を発見"
    export function locatePollution_WQ(){
        agent.move(LEFT, 3)
    }
}

//% color="#ED82B6"
namespace Test{

    //% block="テストループ"
    //% handlerStatement=1
    export function testLoop(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
        handler();
        }
    }

    //%block="テスト移動"
    export function testMoves(){
        agent.move(FORWARD, 2)
        agent.turn(TurnDirection.Left)
        agent.move(FORWARD, 2)
    }
}


