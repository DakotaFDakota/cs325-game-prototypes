import MainScene from "./MainScene.js";
import MenuScene from "./MenuScene.js";
import NumPlayersScene from "./NumPlayersScene.js";
import PlayerNameScene1 from "./PlayerNameScene1.js";
import PlayerNameScene2 from "./PlayerNameScene2.js";
import PlayerNameScene3 from "./PlayerNameScene3.js";
import PlayerNameScene4 from "./PlayerNameScene4.js";
import LeftScene from "./LeftScene.js";
import RightScene from "./RightScene.js";
import ApproachRaccoonsScene from "./ApproachRaccoonsScene.js";
import SnackScene from "./SnackScene.js";
import StayScene from "./StayScene.js";
import EscalatorScene from "./EscalatorScene.js";
import StairsScene from "./StairsScene.js";
import PretzelScene from "./PretzelScene.js";
import SurvivalScene from "./SurvivalScene.js";
import BarrelScene from "./BarrelScene.js";
import CrowbarScene from "./CrowbarScene.js";
import EatPretzelScene from "./EatPretzelScene.js";
import StraightScene from "./StraightScene.js";
import OldManScene from "./OldManScene.js";
import StayOldManScene from "./StayOldManScene.js";
import ShoeStoreScene from "./ShoeStoreScene.js";
import FightMenScene from "./FightMenScene.js";
import FightScene from "./FightScene.js";
import DiamondTrainScene from "./DiamondTrainScene.js";
import TrainScene from "./TrainScene.js";
import DiamondStoreScene from "./DiamondStoreScene.js";
import FeedGroupScene from "./FeedGroupScene.js";
import FightKingScene from "./FightKingScene.js";
import KingWinScene from "./KingWinScene.js";
import KingLoseScene from "./KingLoseScene.js";

const config = {
    width: 512,
    height: 512,
    dom: {
        createContainer: true
    },
    backgroundColor: '#000000',
    type: Phaser.ARCADE,
    parent: 'game2',
    scene: [
        MenuScene,
        NumPlayersScene,
        PlayerNameScene1,
        PlayerNameScene2,
        PlayerNameScene3,
        PlayerNameScene4,
        LeftScene,
        RightScene,
        ApproachRaccoonsScene,
        SnackScene,
        StayScene,
        EscalatorScene,
        StairsScene,
        PretzelScene,
        SurvivalScene,
        BarrelScene, 
        CrowbarScene,
        EatPretzelScene,
        StraightScene,
        OldManScene,
        StayOldManScene,
        ShoeStoreScene,
        FightMenScene,
        FightScene,
        DiamondTrainScene,
        TrainScene,
        DiamondStoreScene,
        FeedGroupScene,
        FightKingScene,
        KingWinScene,
        KingLoseScene,
        MainScene
    ],
    scale: {
        zoom: 2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity:{y:0},
        }
    },
    plugins: {
        scene: [
         {
            plugin: PhaserMatterCollisionPlugin,
            key: 'matterCollision',
            mapping: 'matterCollision'
         }
        ]
    }
}

new Phaser.Game(config);

