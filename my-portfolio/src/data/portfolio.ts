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
    bio: '好奇心が技術に向いているゲームクリエイターの卵です。対戦3DアクションRUMBLE TUMBLEの制作では、「隕石の落下地点がわからない」というフィードバックを受け、DecalProjectを活用して落下範囲をリアルタイム表示する仕組みを実装しました。プログラムに留まらず、体験全体を作る開発者を目指しています',
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
        level: 50,
        category: 'game',
        capabilities: ['3D/2Dゲーム開発'],
        note: 'ゲームの基礎動作やギミックを実装済み'
    },

    // ...続きを追加
]

export const works: Work[] = [
    {
        id: 1,
        title: 'CUBE ROAD',
        genre: '3Dパズル / ステージクリア型',
        category: 'game',
        thumbnail: null,
        screenshots: 'a',
        description: '3Dパズル / 歯車を設置して、ステージに設置されてるギミックを動作させ、運搬物をゴールまでもっていく。',
        tags: ['Unity', 'C#'],
        platform: ['Windows'],
        period: '',
        team: '個人制作',
        role: 'プログラマー / レベルデザイナー（全工程）',
        github: 'https://github.com/username/repo',
        link: null,                         // 公開URLがある場合
        venues: [                           // 出展・公開先（複数可）
                    { name: '学校 卒業制作展示会', date: '2026年2月' },
                ]   ,
        techPoints: 'こだわった技術ポイント...',
        designNotes: '設計上の工夫...',
        implementationTheme: '実装解説テーマ（1文）',
        troubleshooting: '詰まった問題と解決策...',
        performance: 'パフォーマンス改善の工夫...',
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
]

export const certifications: Certification[] = [
    {
        name: '普通自動車第一種運転免許（AT限定）',
        date: '2024年3月取得',
        category: '',
        score: '',
        status: '取得済み',
    },
]

export const 