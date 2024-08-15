import React from 'react'
import { Row } from 'react-bootstrap'
import { chooseus1 } from './data'

const Chooseus = () => {
  return (
    <React.Fragment>
        <Row>
            {chooseus1.map((feature) => (
                <div key={feature.id} className="col-sm-6 col-md-4 col-lg-4">
                    <div className="alt-features-item align-center">
                        <div className="alt-features-icon">
                            <span className={feature.iconClass}></span>
                        </div>
                        <h3 className="alt-features-title font-alt">{feature.title}</h3>
                        <div className="alt-features-descr align-left">
                            {feature.description}
                        </div>
                    </div>
                </div>
            ))}
        </Row>
    </React.Fragment>
  )
}

export default Chooseus