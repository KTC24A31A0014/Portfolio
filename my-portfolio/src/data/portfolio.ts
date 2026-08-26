export interface Profile
{
    name: string
    nameEn: string
    role: string
    school: string
    department: string
    graduationYear: string
    bio: string
    motto: string | null
    avatar: string | null
    links:
    {
        github: string
        twitter: string
        email: string
    }
}

export interface Skill
{
    name: string
    version: string
    level: number // 0 ~ 100
    category: string
    capabilities: string[]
    note: string | null
}

export interface Venue
{
    name: string
    date: string
}

export interface Work
{
    id: number
    title: string
    genre: string
    category: string
    thumbnail: string
    screenshots: string
    description: string
    tags: string[]
    platform: string[]
    period: string
    team: string
    role: string
    github: string | null
    link: string | null
    venues: Venue[]
    techPoints: string | null
    designNotes: string | null
    implementationTheme: string | null
    troubleshooting: string | null
    performance: string | null
}

export interface GameJam
{
    name: string
    date: string
    theme: string
    description: string
    platform: string[]
    role: string
    team: string
    result: string | null
    url: string | null
    reflection: string
}

// union型で入力できる値を制限する
export type CertStatus = '取得済み' | '受験予定' | '取得予定' | '学習中'

export interface Certification
{
    name: string
    date: string
    category: string
    score: string | null
    status: CertStatus
}

export interface TimelineItem
{
    year: string
    event: string
}

export const profile: Profile =
{
    name: '河端 大輔',
    nameEn: 'Daisuke Kawabata',
    role: 'Game Creator',
    school: '京都デザイン＆テクノロジー専門学校',
    department: 'スーパーAI&テクノロジー学科スーパーゲームクリエイター専攻',
    graduationYear: '2028年3月卒業見込み',
    bio: '好奇心が技術に向いているゲームクリエイターの卵です。対戦3DアクションRUMBLE TUMBLEの制作では、「隕石の落下地点がわからない」というフィードバックを受け、DecalProjectを活用して落下範囲をリアルタイム表示する仕組みを実装しました。プログラムに留まらず、体験全体を作る開発者を目指しています。',
    motto: '世界に期待されるクリエイターをめざして',
    avatar: null,
    links:
    {
        github: 'https://github.com/KTC24A31A0014',
        twitter: 'https://twitter.com/@create__0000',
        email: 'ktc24a31a0014@edu.kyoto-tech.ac.jp',
    }
}

export const skills: Skill[] = [
    {
        name: 'Unity',
        version: '6000.3.8f1',
        level: 40,
        category: 'Game Engine',
        capabilities: ['3D/2Dゲーム開発'],
        note: 'ゲームの基礎動作やギミックを実装済み'
    },

    {
        name: 'UnrealEngine',
        version: '',
        level: 40,
        category: 'Game Engine',
        capabilities: ['3Dゲーム開発'],
        note: null
    },

    {
        name: 'C#',
        version: '',
        level: 40,
        category: '言語',
        capabilities: [''],
        note: null
    },

    {
        name: 'C++',
        version: '',
        level: 40,
        category: '言語',
        capabilities: [''],
        note: null
    },

    // ...続きを追加
]

export const works: Work[] = [
    {
        id: 1,
        title: 'CUBE ROAD',
        genre: '3Dパズル / ステージクリア型',
        category: 'game',
        thumbnail: 'images/',
        screenshots: 'a',
        description: '3Dパズル / 歯車を設置して、ステージに設置されてるギミックを動作させ、運搬物をゴールまでもっていく。',
        tags: ['Unity', 'C#'],
        platform: ['Windows'],
        period: '',
        team: 'チーム制作',
        role: 'プログラマー',
        github: 'https://github.com/KTC24A31A0014/CubeRoad.git',
        link: null,                         // 公開URLがある場合
        venues: [                           // 出展・公開先（複数可）
                    { name: '2025we are JIKEI COM 若きクリエーター展', date: '2025年2月' },
                ]   ,
        techPoints: 'ややこしい説明がなくとも簡単に操作ができるように、プレイヤーの視点を考えながら操作に関する仕組みを作りました。',
        designNotes: 'プレイヤーがどの角度からオブジェクトに触れても反応するよう laycast を活用。',
        implementationTheme: 'ルービックキューブのように回転するステージ',
        troubleshooting: '授業で学んだ範疇では実装ができなかったので、いろんな先生の知恵を借りました。',
        performance: null,
    },

    {
        id: 2,
        title: 'Gear Bot',
        genre: '3Dパズル / ステージクリア型',
        category: 'game',
        thumbnail: 'images/',
        screenshots: 'a',
        description: '3Dパズル / 歯車を設置して、ステージに設置されてるギミックを動作させ、運搬物をゴールまでもっていく。',
        tags: ['Unity', 'C#'],
        platform: ['Windows'],
        period: '',
        team: 'チーム制作',
        role: 'プログラマー',
        github: 'https://github.com/Colon-programmer/Gear-Logic.git',
        link: null,                         // 公開URLがある場合
        venues: [                           // 出展・公開先（複数可）
                    { name: 'BitSummit 2025', date: '2025年7月' },
                    { name: 'TOKYO GAME SHOW 2025', date: '2025年9月' },
                ]   ,
        techPoints: '１つ１つの動作にズレが生じると不自然さを感じると考え、１つ１つすべての動作にかかる時間を制御できるようにしました。',
        designNotes: '１つのステージ内で進む時間（ターン）を意識しながら作成。',
        implementationTheme: '運搬物を3ターンで180°縦軸に回転し、運ぶクレーン。',
        troubleshooting: '他の担当の成果物ができたり、時間が進み、プランナーの考え方が変わったりで仕様・要望が当初より何度か変わったりしましたが、都度、要望に応えて実装。',
        performance: null,
    },

    {
        id: 3,
        title: 'RUMBLE TUMBLE',
        genre: '対戦3Dアクション',
        category: 'game',
        thumbnail: '/images/RumbleTumbleタイトルロゴ1.png',
        screenshots: 'a',
        description: '対戦3Dアクション / 歯車を設置して、ステージに設置されてるギミックを動作させ、運搬物をゴールまでもっていく。',
        tags: ['Unity', 'C#'],
        platform: ['Windows'],
        period: '',
        team: 'チーム制作',
        role: 'プログラマー',
        github: 'https://ktc-git.kitsune-cs.dev/kento/RumbuleTumbule.git',
        link: null,                         // 公開URLがある場合
        venues: [                           // 出展・公開先（複数可）
                    { name: '2026we are JIKEI COM 若きクリエーター展', date: '2026年2月' },
                    { name: 'BitSummit 2026', date: '2026年5月' },
                ]   ,
        techPoints: 'ギミック自体の動作とプレイヤーに与える影響まで、不自然さを感じさせないように意識しました。',
        designNotes: 'プレイヤーに攻略法を見出されないように、オブジェクトを範囲内にランダムで出現するように設定。',
        implementationTheme: '"指定した範囲内にランダムの位置で隕石が生成され、ステージ上に落下し、落下途中の隕石に触れたプレイヤーは、ふっとぶ。"',
        troubleshooting: '隕石がステージ上のどこに落ちるか視覚情報が欲しいという意見をもらいました。解決方法として、DecalProject を活用することで隕石の落下地点に落下範囲を表示できました。',
        performance: null,
    },
]

export const gameJams: GameJam[] = [
    {
        name: 'Bitsummit 2025',
        date: '2025年7月',
        theme: 'シンプル操作の歯車を使ったカジュアルパズルゲーム',
        description: '3Dパズル / 歯車を設置して、ステージに設置されてるギミックを動作させ、運搬物をゴールまでもっていく。',
        platform: ['Windows'],
        role: 'プログラマー（ギミック担当）',
        team: 'チーム11名（プランナー2、プログラマー4、デザイナー5）',
        result: null,
        url: 'https://github.com/24a31a0011/Gear-Bot.git',
        reflection: '',
    },

    {
        name: 'TOKYO GAME SHOW 2025',
        date: '2025年9月',
        theme: 'シンプル操作の歯車を使ったカジュアルパズルゲーム',
        description: '3Dパズル / 歯車を設置して、ステージに設置されてるギミックを動作させ、運搬物をゴールまでもっていく。',
        platform: ['Windows'],
        role: 'プログラマー（ギミック担当）',
        team: 'チーム11名（プランナー2、プログラマー4、デザイナー5）',
        result: null,
        url: 'https://github.com/24a31a0011/Gear-Bot.git',
        reflection: '',
    },

    {
        name: 'Bitsummit 2026',
        date: '2026年5月',
        theme: '初心者でもたまたま勝てる超・理不尽パーティゲーム',
        description: '対戦3Dアクション / 生き残る。',
        platform: ['Windows'],
        role: 'プログラマー（ギミック担当）',
        team: 'チーム10名（プランナー2、プログラマー3、デザイナー5）',
        result: null,
        url: 'https://ktc-git.kitsune-cs.dev/kento/RumbuleTumbule.git',
        reflection: '',
    },
]

export const certifications: Certification[] = [
    {
        name: '普通自動車第一種運転免許（AT限定）',
        date: '2024年3月取得',
        category: '免許',
        score: '',
        status: '取得済み',
    },

    {
        name: 'MOS Excel 2019 ',
        date: '2025年2月取得',
        category: '',
        score: '',
        status: '取得済み',
    },
]

export const timeline: TimelineItem[] =
[
    { year: '2024年4月', event: '京都デザイン＆テクノロジー専門学校 スーパーAI＆テクノロジー学科 スーパーゲームクリエイター専攻 入学'},
    { year: '2028年3月', event: '京都デザイン＆テクノロジー専門学校 スーパーAI＆テクノロジー学科 スーパーゲームクリエイター専攻 卒業見込み'},
]

import type { IconType } from 'react-icons'
import { FaGamepad, FaGlobe, FaCube, FaFolder } from 'react-icons/fa6'

export const CATEGORY_ICON: Record<string, IconType> = 
{
    game: FaGamepad,
    web:  FaGlobe,
    '3d': FaCube,
}

export const CATEGORY_ICON_FALLBACK: IconType = FaFolder