import {React, createContext, useContext, useState} from "react";

import {Container, Group, Title, SubTitle, Text, Meta, Item, Image, Entities, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content} from "./styles/card";

export const Featurecontext = createContext();

export default function Card({children, ...restProps}) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <Featurecontext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>{children}</Container>
        </Featurecontext.Provider>
    )
}

Card.Group = function CardGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Card.Meta = function CardMeta({children, ...restProps}) {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Feature = function CardFeature({children, category, ...restProps}) {
    const {showFeature, itemFeature, setShowFeature} = useContext(Featurecontext);
    return showFeature ? (
        <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>
            
            <Group margin="30px 0" flexDirection="row" alignItems="center">
                <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                <FeatureText fontWeight="bold">
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </FeatureText>
            </Group> 
            {children}
            </Content>
        </Feature>
    ) : null;
};

Card.Item = function CardItem({item, children, ...restProps}) {
    const {setShowFeature, setItemFeature} = useContext(Featurecontext);
    return <Item onClick={() => {setItemFeature(item);setShowFeature(true);}}{...restProps}>{children}</Item>
}

Card.Image = function CardImage({...restProps}) {
    return <Image {...restProps}/>
};

Card.Entities = function CardEntities({children, ...restProps}) {
    return <Entities {...restProps}>{children}</Entities>
}

