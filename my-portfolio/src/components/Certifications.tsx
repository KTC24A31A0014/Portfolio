import type { IconType } from 'react-icons'
import {
    FaLancmark, FaIdCard, FaMedal, FaBolt, FaFlag,
    FaDesktop, FaBookOpen, FaClipboard,
}   from 'react-icons/fa6'
import { certifications, type Certification, type CerStatus } from '../data/portfolio'

// カテゴリごとのアイコン (react-icons Component)
const CATEGORY_ICONS: Record<string, IconType> = {
    '国家資格':     FaLandmark,
    '免許':         FaIdCard,
    'ベンダー認定'  FaMedal,
    '競プロ'        FaBolt,
    // 'CTF': FaFlag, 'ISUCON': FaDesktop, '学習中': FaBookOpen ...
}

function StatusBadge({ status }: { status: CertStatus })
{
    const cfg = STATUS_CONFIG[status]
    return (
        <span
            className = "cert-status"
            style = {{ color: cfg.color, background: cfg.bg, borderColor: cfg.border }}
        >
        {status}
        </span>
    )
}

function CertRow({ cert }: { cert: Certification })
{
    return (
        <div className = "cert-row">
            <div className = "cert-icon">
                {(() => {
                    const Icon = CATEGORY_ICONS[cert.category] ?? FaClipboard
                    return <Icon />
                })()}
            </div>

            <div className = "cert-main">
                <div className = "cert-name-row">
                    <p className = "cert-name">{cert.name}</p>
                    {cert.score && <span className = "cert-score">{cert.score}</span>}
                </div>
                <p className = "cert-date">{cert.date}</p>
            </div>

            <div className = "cert-meta">
                <span className = "cert-category">{cert.category}</span>
            </div>

            <StatusBadge status = {cert.status} />
        </div>
    )
}

export default function Certifications()
{
    return (
        <section className = "section" id = "certifications">
            <div className = "container">
                <h2 className = "section-title"><span>Certifications</span></h2>
                <p className = "section-sub">資格・実績</p>

                <div className = "cert-list">
                    {certifications.map((cert, i) => (
                        <CertRow key = {i} cert = {cert} />
                    ))}
                </div>
            </div>
        </section>
    )
}